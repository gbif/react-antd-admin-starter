import { addError } from './errors'
import { searchDeletedDatasets } from '../api/datasetSearch';
export const DATASET_DELETED_UPDATE = 'DATASET_DELETED_UPDATE'
export const DATASET_DELETED_LOADING = 'DATASET_DELETED_LOADING'
export const DATASET_DELETED_FAILED = 'DATASET_DELETED_FAILED'

export const setDatasetResults = data => ({
  type: DATASET_DELETED_UPDATE,
  data: {
    ...data,
    loading: false
  }
})

export const loadingDatasetResults = loading => ({
  type: DATASET_DELETED_LOADING,
  data: { loading }
})

export const failedDatasetSearch = ({status, statusText}) => ({
  type: DATASET_DELETED_FAILED,
  data: { loading: false, error: {status, statusText} }
})

export const updateDatasetSearch = query => async (dispatch, getState) => {
  dispatch(loadingDatasetResults(true))
  const currentState = getState().datasetSearch;
  const response = (await searchDeletedDatasets({ limit: currentState.result.limit, offset: currentState.result.offset, ...query }))
  if (response.ok) {
    const result = await response.json();
    dispatch(setDatasetResults({ result, ...query }))
  } else {
    dispatch(failedDatasetSearch(response))
    dispatch(addError(response))
  }
}