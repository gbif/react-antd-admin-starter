import { addError } from './errors'
import { searchDatasets } from '../api/datasetSearch';
export const DATASET_SEARCH_UPDATE = 'DATASET_SEARCH_UPDATE'
export const DATASET_SEARCH_LOADING = 'DATASET_SEARCH_LOADING'
export const DATASET_SEARCH_FAILED = 'DATASET_SEARCH_FAILED'

export const setDatasetResults = data => ({
  type: DATASET_SEARCH_UPDATE,
  data: {
    ...data,
    loading: false,
    error: false
  }
})

export const loadingDatasetResults = loading => ({
  type: DATASET_SEARCH_LOADING,
  data: { loading, error: false }
})

export const failedDatasetSearch = ({status, statusText}) => ({
  type: DATASET_SEARCH_FAILED,
  data: { loading: false, error: {status, statusText} }
})

export const updateDatasetSearch = query => async (dispatch, getState) => {
  dispatch(loadingDatasetResults(true))
  const currentState = getState().datasetSearch;
  const response = (await searchDatasets({ q: currentState.q, limit: currentState.result.limit, offset: currentState.result.offset, ...query }))
  if (response.ok) {
    const result = await response.json();
    dispatch(setDatasetResults({ result, ...query }))
  } else {
    dispatch(failedDatasetSearch(response))
    dispatch(addError(response))
  }
}