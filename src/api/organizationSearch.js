import qs from "qs";
import axios_cancelable from './axiosCancel'
import setHeaders from './setHeaders'

export const searchOrganizations = function(query) {
  return axios_cancelable.get(`//api.gbif-uat.org/v1/organization?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const searchDeletedOrganizations = function(query) {
  return axios_cancelable.get(`//api.gbif-uat.org/v1/organization/deleted?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};