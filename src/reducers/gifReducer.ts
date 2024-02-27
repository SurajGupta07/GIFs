import {Reducer} from 'react';
import {TGifsInitialState, TTrendingGifs} from '../models/gifs';
import {EGIFS} from '../types/enums';

export type Action = {
  type: EGIFS;
  payload: TTrendingGifs[];
  errorMessage?: null;
};

export const gifState: TGifsInitialState = {
  trendingGifs: {data: [], loading: true, error: false, errorMessage: null},
};

export const gifsReducer: Reducer<TGifsInitialState, Action> = (
  state = gifState,
  action,
) => {
  switch (action.type) {
    case EGIFS.TRENDING_GIFS_LOADING:
      return {
        ...state,
        trendingGifs: {
          ...state.trendingGifs,
          loading: true,
          error: false,
        },
      };
    case EGIFS.TRENDING_GIFS_SUCCESS:
      return {
        ...state,
        trendingGifs: {
          ...state.trendingGifs,
          loading: false,
          data: [...state.trendingGifs.data, ...action.payload],
          error: false,
        },
      };
    case EGIFS.TRENDING_GIFS_FAILURE:
    case EGIFS.SEARCH_GIFS_FAILURE:
      return {
        ...state,
        trendingGifs: {
          ...state.trendingGifs,
          loading: false,
          error: true,
          errorMessage:
            action.errorMessage !== undefined ? action.errorMessage : null,
        },
      };
    case EGIFS.SEARCH_GIFS_SUCCESS:
    case EGIFS.REFRESH_GIFS_SUCCESS:
      return {
        ...state,
        trendingGifs: {
          loading: false,
          data: action?.payload,
          error: false,
        },
      };
    default:
      return state;
  }
};
