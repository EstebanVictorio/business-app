import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import person from "./slice/person"
import business from "./slice/business"
import masterSaga from "./sagas"


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    business,
    person,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(masterSaga)

export default store
