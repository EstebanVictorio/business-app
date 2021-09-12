import { all } from "redux-saga/effects"
import businessSagas from "./business"
import personSagas from "./person"


export default function* masterSaga(){
  yield all([
    businessSagas(),
    personSagas(),
  ])
}
