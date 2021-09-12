import { takeLatest, call, put } from "redux-saga/effects"
import { getPersons, createPerson, deletePerson, editPerson } from "api/person"
import { querySuccess, addSuccess, queryLoading, deleteSuccess, editSuccess } from "store/slice/person"

/**
 * 
 * @param {PayloadAction<PersonPayload>} action
 */
function* query(action) {
  const { persons } = yield call(getPersons, action.payload.businessId)
  yield put(querySuccess({ persons }))
}


/**
 * 
 * @param {PayloadAction<PersonPayload>} action
 */
 function* add(action) {
  const created = yield call(
    createPerson,
    action.payload.businessId,
    action.payload.name,
    action.payload.role,
    action.payload.email,
    action.payload.phone,
    action.payload.joinDate,
  )
  yield put(addSuccess({ created }))
  yield put(queryLoading({ businessId: action.payload.businessId }))
}

/**
 * 
 * @param {PayloadAction<PersonPayload>} action
 */
 function* edit(action) {
  const edited = yield call(
    editPerson,
    action.payload.businessId,
    action.payload.personId,
    action.payload.name,
    action.payload.role,
    action.payload.email,
    action.payload.phone
  )
  yield put(editSuccess(edited))
}

/**
 * @param {PayloadAction<PersonPayload>} action
 */
 function* del(action) {
  const { status } = yield call(deletePerson, action.payload.businessId, action.payload.personId)
  if (status === 200) {
    yield put(deleteSuccess())
    yield put(queryLoading({ businessId: action.payload.businessId }))
  }
}

export default function* sagas() {
  yield takeLatest('person/queryLoading', query)
  yield takeLatest('person/addLoading', add)
  yield takeLatest('person/editLoading', edit)
  yield takeLatest('person/deleteLoading', del)
}
