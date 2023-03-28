import { BASE_URL, TIME_OUT } from './config';
import Request from './request';

const erequest = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

export default erequest;
