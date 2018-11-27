import { addError } from './errors'
import { getDataset, getDatasetConstituents } from '../api/datasetSearch';
export const DATASET_LOADING = 'DATASET_LOADING'
export const DATASET_LOAD_FAILED = 'DATASET_LOAD_FAILED'
export const DATASET_UPDATED = 'DATASET_UPDATED'

export const loadingDataset = loading => ({
  type: DATASET_LOADING,
  data: {
    loading: loading
  }
})

export const loadingDatasetFailed = error => ({
  type: DATASET_LOAD_FAILED,
  data: { loading: false, error: error }
})

export const setDataset = ({dataset, constituents}) => ({
  type: DATASET_UPDATED,
  data: { loading: false, dataset, constituents }
})

export const loadDataset = key => async (dispatch, getState) => {
  try{
    dispatch(loadingDataset(true))
    const dataset = (await getDataset(key)).data
    const constituents = (await getDatasetConstituents(key)).data
    
    dispatch(setDataset({dataset, constituents}))
  } catch(err) {
    dispatch(loadingDatasetFailed(err))
    dispatch(addError(err))
  }
}