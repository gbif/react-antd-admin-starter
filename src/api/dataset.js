import qs from "qs";
import axios from 'axios'
import axios_cancelable from './axiosCancel'
import setHeaders from './setHeaders'

export const searchDatasets = function(query) {
  return axios_cancelable.get(`//api.gbif-dev.org/v1/dataset?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const searchDeletedDatasets = function(query) {
  return axios_cancelable.get(`//api.gbif-dev.org/v1/dataset/deleted?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const searchDuplicateDatasets = function(query) {
  return axios_cancelable.get(`//api.gbif-dev.org/v1/dataset/duplicate?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const searchDatasetsWithNoEndpoint = function(query) {
  return axios_cancelable.get(`//api.gbif-dev.org/v1/dataset/withNoEndpoint?${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const updateDataset = function(data) {
  return axios.put(`//api.gbif-dev.org/v1/dataset/${data.key}`, data, {
    headers: setHeaders()
  })
};

export const getDatasetOverview = async function(key) {
  const dataset = (await getDataset(key)).data
  const constituents = (await getDatasetConstituents(key, {})).data
  return {
    dataset,
    constituents
  }
}

export const getDataset = function(key) {
  return axios.get(`//api.gbif-dev.org/v1/dataset/${key}`, {
    headers: setHeaders()
  })
};

export const getDatasetContacts = function(key) {
  return axios.get(`//api.gbif-dev.org/v1/dataset/${key}/contact`, {
    headers: setHeaders()
  })
};

export const getDatasetIdentifier = function(key) {
  return axios.get(`//api.gbif-dev.org/v1/dataset/${key}/identifier`, {
    headers: setHeaders()
  })
};

export const getDatasetEndpoint = function(key) {
  return axios.get(`//api.gbif-dev.org/v1/dataset/${key}/endpoint`, {
    headers: setHeaders()
  })
};

export const getDatasetTags = function(key) {
  return axios.get(`//api.gbif-dev.org/v1/dataset/${key}/tag`, {
    headers: setHeaders()
  })
};

export const getDatasetMachineTags = function(key) {
  return axios.get(`//api.gbif-dev.org/v1/dataset/${key}/machineTag`, {
    headers: setHeaders()
  })
};

export const getDatasetComment = function(key) {
  return axios.get(`//api.gbif-dev.org/v1/dataset/${key}/comment`, {
    headers: setHeaders()
  })
};

export const getDatasetConstituents = function(key, query) {
  return axios.get(`//api.gbif-dev.org/v1/dataset/${key}/constituents${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};

export const getDatasetProcess = function(key, query) {
  return axios.get(`//api.gbif-dev.org/v1/dataset/${key}/process${qs.stringify(query)}`, {
    headers: setHeaders()
  })
};
