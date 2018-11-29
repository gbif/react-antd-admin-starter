import qs from "qs";
import config from './config'
import axios_cancelable from './axiosCancel'
import setHeaders from './setHeaders'

export const search = function(query) {
  return axios_cancelable.get(`${config.dataApi}/installation?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const deleted = function(query) {
  return axios_cancelable.get(`${config.dataApi}/installation/deleted?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const nonPublishing = function(query) {
  return axios_cancelable.get(`${config.dataApi}/installation/nonPublishing?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};