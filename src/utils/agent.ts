import { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { sha256 } from 'react-native-sha256';

import { AccessToken } from '@store/auth/types';
import { axiosInstance } from './axios';
import { DEVICE_TOKEN_STORAGE_KEY } from 'src/common/storageKey';
import { log, logline } from './debug';

const privFetch = axiosInstance;

export type Method = 'post' | 'get' | 'delete' | 'put' | 'patch';

export type RequestParams = {
  method?: Method;
  url: string;
  body?: any;
  headers?: AxiosRequestHeaders;
  deviceToken?: string | null;
};

const createXSign = async ({
  url,
  method = 'get',
  deviceToken,
  body = null,
}: RequestParams): Promise<string | null> => {
  if (!deviceToken) return null;

  const METHOD = method.toUpperCase();
  const secretSha256 = await sha256(deviceToken);
  const concatSha256 = await sha256(
    `${url}!${JSON.stringify(body)}!${METHOD}!${deviceToken}`
  );

  return `${secretSha256}!${concatSha256}`;
};

export const tokenToHeaders = (accessToken: AccessToken): void => {
  privFetch.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

privFetch.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const deviceToken = await AsyncStorage.getItem(DEVICE_TOKEN_STORAGE_KEY);
  const { data, method, url, headers } = config;

  /* if (url?.includes('operations')) {
    logline('agent', { url, data });
  } */

  const xSign = await createXSign({
    url: url!,
    method: method?.toLowerCase() as Method,
    deviceToken,
    body: data,

  });
  config.headers[method]['X-Sign'] = xSign;

  return config;
}, (error) => {
  //logline('[privFetch/request/err]', error);
  return error;
});

privFetch.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  //logline("[privFetch]/respose/error", error)
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


export const signedRequest = <T = AxiosResponse>({
  method = 'get',
  url,
  body = {},
  headers,
}: RequestParams): Promise<T> =>
  privFetch[method](url, body, {
    headers,
  });

