import { BASE_URL, TIME_OUT } from './config/config';
import Request from './request/request';

const erequest = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

export default erequest;
