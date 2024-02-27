import axios, {AxiosRequestConfig} from 'axios';
import {CONSTANTS, EReqMethod} from '../types/enums';
import {isNetworkConnected} from './network.service';

const uri = 'https://api.giphy.com/v1/gifs';
const API_KEY = '18bjux7nP3nS5V7vZ89ZQ2Rl7Xfg75PJ';

type HttpServiceType = {
  method: EReqMethod;
  body?: any;
  header?: {[key: string]: string} | undefined;
  query?: string;
  endpoint: string;
  limit?: string;
  offset?: number;
};

export const HttpService = async (param: HttpServiceType) => {
  const hasNetwork = await isNetworkConnected();
  if (!hasNetwork) {
    return Promise.resolve({
      resultStatus: {
        status: 'ERROR',
        errorMessage: 'Network connection is down',
      },
    });
  }

  const {
    method,
    body = undefined,
    header,
    query,
    endpoint,
    limit,
    offset,
  } = param;
  const params = {
    q: query,
    api_key: API_KEY,
    limit: limit ?? '10',
    offset: offset ?? 0,
  };

  let headers: {[key: string]: string} | undefined;
  const requestUrl: string = uri + endpoint;

  if (header !== undefined) {
    headers = header;
  } else {
    headers = {
      'Content-type': 'application/json',
      Accept: 'application/json',
    };
  }

  const axiosParams: AxiosRequestConfig = {
    method: method as string,
    url: requestUrl,
    params,
    data: body,
    headers: headers,
  };

  const resp = await axios(axiosParams).catch(error => {
    console.error(error);
    return Promise.reject(CONSTANTS.SERVER_RESOURCE_NOT_FOUND);
  });

  return resp.data;
};
