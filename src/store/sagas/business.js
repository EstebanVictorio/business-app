import { takeLatest, call, put } from "redux-saga/effects"
import { getBusinesses, createBusiness, editBusiness, deleteBusiness } from "api/business"
import { querySuccess, addSuccess, queryLoading , editSuccess, deleteSuccess } from "store/slice/business"

function* query() {
  const { businesses } = yield call(getBusinesses)
  yield put(querySuccess({ businesses }))
}

/**
 * 
 * @param {PayloadAction<BusinessPayload>} action
 */
function* add(action) {
  const created = yield call(createBusiness, action.payload.name)
  yield put(addSuccess({ created }))
  yield put(queryLoading())
}

/**
 * 
 * @param {PayloadAction<BusinessPayload>} action
 */
function* edit(action) {
  const edited = yield call(editBusiness, action.payload.businessId,action.payload.name)
  yield put(editSuccess(edited))
}


/**
 * @param {PayloadAction<BusinessPayload>} action
 */
function* del(action) {
  const { status } = yield call(deleteBusiness, action.payload.businessId)
  if (status === 200) {
    yield put(deleteSuccess())
    yield put(queryLoading())
  }
}

export default function* sagas() {
  yield takeLatest('business/queryLoading', query)
  yield takeLatest('business/addLoading', add)
  yield takeLatest('business/editLoading', edit)
  yield takeLatest('business/deleteLoading', del)
}
