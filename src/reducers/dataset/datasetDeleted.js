import {
  DATASET_DELETED_UPDATE,
  DATASET_DELETED_LOADING
} from '../../actions/datasetDeleted'

export default function (state = { error: false, loading: false, result: {count: 0, limit: 20, results: []}}, action) {
  switch (action.type) {
    case DATASET_DELETED_UPDATE:
      return {...state, ...action.data }
    case DATASET_DELETED_LOADING:
      return {...state, ...action.data }
    default:
      return state
  }
}