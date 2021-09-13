import { takeLatest, call, put } from "redux-saga/effects"
import { getBusinesses, createBusiness, editBusiness, deleteBusiness, getBusiness } from "api/business"
import { querySuccess, addSuccess, queryLoading , editSuccess, deleteSuccess, querySingleSuccess, deleteFailure } from "store/slice/business"
import { deletePerson, getPersons } from "api/person"

function* query() {
  const { businesses } = yield call(getBusinesses)
  yield put(querySuccess({ businesses }))
}

function* querySingle(action) {
  const business = yield call(getBusiness, action.payload.businessId)
  yield put(querySingleSuccess({ business }))
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
  /**
   * @type {{
   *  persons: Person[]
   * }} businessPersonResponse
   */
  const businessPersonResponse = yield call(getPersons,action.payload.businessId)

  let personsDeleted = 0
  for (const person of businessPersonResponse.persons) {
    const { status } = yield call(deletePerson,action.payload.businessId,person.personId)
    if(status === 200) {
      personsDeleted++
    }
  }

  if(personsDeleted === businessPersonResponse.persons.length) {
    const { status } = yield call(deleteBusiness, action.payload.businessId)
    if (status === 200) {
      yield put(deleteSuccess())
      yield put(queryLoading())
    }
    return
  }

  yield put(deleteFailure())
}

export default function* sagas() {
  yield takeLatest('business/addLoading', add)
  yield takeLatest('business/editLoading', edit)
  yield takeLatest('business/deleteLoading', del)
  yield takeLatest('business/queryLoading', query)
  yield takeLatest('business/querySingleLoading', querySingle)
}
