import { all } from "redux-saga/effects"
import businessSagas from "./business"


export default function* masterSaga(){
  yield all([
    businessSagas()
  ])
}
