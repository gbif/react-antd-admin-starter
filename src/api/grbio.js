import qs from "qs";
import config from './config'
import axios_cancelable from './axiosCancel'
import setHeaders from './setHeaders'

export const collectionSearch = function(query) {
  return axios_cancelable.get(`${config.dataApi}/grbio/collection?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const institutionSearch = function(query) {
  return axios_cancelable.get(`${config.dataApi}/grbio/institution?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const personSearch = function(query) {
  return axios_cancelable.get(`${config.dataApi}/grbio/person?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};