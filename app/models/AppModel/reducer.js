import { fromJS, List } from 'immutable'
import * as Constants from './constants'
import Model from './model'

const initialState = new Model();

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.onInit:
      return state
        .set('hasStateLoaded', false)
    case Constants.onInitSuccess:
    case Constants.onInitFailure:
      return state
        .set('hasStateLoaded', true)
    default:
      return state
  }
}
