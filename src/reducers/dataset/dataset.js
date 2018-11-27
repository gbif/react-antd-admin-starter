import {
  DATASET_LOADING,
  DATASET_LOAD_FAILED,
  DATASET_UPDATED
} from '../../actions/dataset'

export default function (state = { error: false, loading: false, dataset: null}, action) {
  switch (action.type) {
    case DATASET_LOADING:
      return {...state, loading: action.data.loading }
    case DATASET_LOAD_FAILED:
      return {...state, loading: false, error: action.data.error }
    case DATASET_UPDATED:
      return {...state, ...action.data }
    default:
      return state
  }
}