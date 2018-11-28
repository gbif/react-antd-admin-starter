import qs from "qs";
import axios_cancelable from './axiosCancel'
import setHeaders from './setHeaders'

export const search = function(query) {
  return axios_cancelable.get(`//api.gbif-dev.org/v1/organization?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const deleted = function(query) {
  return axios_cancelable.get(`//api.gbif-dev.org/v1/organization/deleted?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const nonPublishing = function(query) {
  return axios_cancelable.get(`//api.gbif-dev.org/v1/organization/nonPublishing?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};