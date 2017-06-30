import { put, select, fork, takeLatest, cps, take, cancelled, race, call } from 'redux-saga/effects'
import client from 'client'

import { fromJS, List, Map } from 'immutable'

import * as constants from './constants'
import * as actions from './actions'

function* onInit() {

}

function* onInitializeWatcher() {
    yield takeLatest(constants.onInit, onInit)
}


export function* defaultSaga() {
    yield fork(onInitializeWatcher)
}


export default [
    defaultSaga,
]
