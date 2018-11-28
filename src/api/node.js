import qs from "qs";
import axios_cancelable from './axiosCancel'
import setHeaders from './setHeaders'

export const search = function(query) {
  return axios_cancelable.get(`//api.gbif-dev.org/v1/node?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};
