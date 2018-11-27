import { combineReducers } from 'redux'
import locale from './locale'
import dataset from './dataset'
import errors from './errors'
import user from './user'

export default combineReducers({
  locale,
  ...dataset,
  errors,
  user
})