import qs from "qs";
import config from './config'
import axios_cancelable from './axiosCancel'
import setHeaders from './setHeaders'

export const search = function(query) {
  return axios_cancelable.get(`${config.dataApi}/organization?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const deleted = function(query) {
  return axios_cancelable.get(`${config.dataApi}/organization/deleted?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const nonPublishing = function(query) {
  return axios_cancelable.get(`${config.dataApi}/organization/nonPublishing?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};