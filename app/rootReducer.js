/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from "redux-immutable";

import AppModelReducer from "AppModel/reducer";
import { domain as AppModelDomain } from "AppModel/constants";

export default function(asyncReducers) {
  return combineReducers({
    [AppModelDomain]: AppModelReducer,
    ...asyncReducers
  });
}
