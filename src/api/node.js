import qs from "qs";
import config from './config'
import axios_cancelable from './axiosCancel'
import setHeaders from './setHeaders'

export const search = function(query) {
  return axios_cancelable.get(`${config.dataApi}/node?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};
