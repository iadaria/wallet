import axios from 'axios';
import { API_HOST, API_VERSION } from 'src/config';
import { USER_AGENT } from '@constants/webView';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['User-Agent'] = USER_AGENT;
axios.defaults.headers.common.Version = API_VERSION;
axios.defaults.baseURL = API_HOST;

export const axiosInstance = axios.create({});

//export const cancelTokenSource = axios.CancelToken.source();
/* export const axiosInstance = axios.create({
  cancelToken: cancelTokenSource.token,
}); */
