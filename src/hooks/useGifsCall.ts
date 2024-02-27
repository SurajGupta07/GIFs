import {useGifs} from '../context/gifsContext';
import {HttpService} from '../services/http.service';
import {EGIFS, EReqMethod} from '../types/enums';
import {END_POINTS} from '../utils/endpoints';

export const useVideoData = () => {
  const {dispatch} = useGifs();

  const fetchTrendingGifs = async (
    offset: number,
    setLoadingMore: (v: boolean) => void,
  ) => {
    try {
      if (offset === 0) {
        dispatch({type: EGIFS.TRENDING_GIFS_LOADING, payload: []});
      }

      const response = await HttpService({
        endpoint: END_POINTS.getAllTrendingGifs,
        method: EReqMethod.GET,
        limit: '10',
        offset: offset,
      });

      if (response.meta.status === 200) {
        if (offset === 0) {
          dispatch({
            type: EGIFS.REFRESH_GIFS_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: EGIFS.TRENDING_GIFS_SUCCESS,
            payload: response.data,
          });
        }
      }
    } catch (error: any) {
      dispatch({
        type: EGIFS.TRENDING_GIFS_FAILURE,
        errorMessage: error.message,
        payload: [],
      });
    } finally {
      setLoadingMore(false);
    }
  };

  const searchGifs = async (q: string) => {
    try {
      const response = await HttpService({
        endpoint: END_POINTS.getSearchGifs,
        method: EReqMethod.GET,
        query: q,
      });
      if (response.meta.status === 200) {
        dispatch({
          type: EGIFS.SEARCH_GIFS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      dispatch({
        type: EGIFS.SEARCH_GIFS_FAILURE,
        errorMessage: error.message,
        payload: [],
      });
    }
  };

  const refreshGifs = async () => {
    try {
      const response = await HttpService({
        endpoint: END_POINTS.getAllTrendingGifs,
        method: EReqMethod.GET,
      });
      if (response.meta.status === 200) {
        dispatch({
          type: EGIFS.REFRESH_GIFS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: any) {
      dispatch({
        type: EGIFS.TRENDING_GIFS_FAILURE,
        errorMessage: error.message,
        payload: [],
      });
    }
  };

  return {
    fetchTrendingGifs,
    searchGifs,
    refreshGifs,
  };
};
