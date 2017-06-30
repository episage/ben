import { fork, all } from 'redux-saga/effects'

import AppModelSagas from 'AppModel/sagas'

export default function* rootSaga() {
  yield all([
    ...AppModelSagas,
  ].map(fork))
}
