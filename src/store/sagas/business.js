import { takeLatest, call, put } from "redux-saga/effects"
import { getBusinesses } from "api/business"
import { setSuccess } from "store/reducer/business"

function* query() {
  const { businesses } = yield call(getBusinesses)
  yield put(setSuccess({ businesses }))
}


export default function* sagas() {
  yield takeLatest('business/query', query)
}
