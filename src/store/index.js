import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import business from "./slice/business"
import masterSaga from "./sagas"


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    business,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(masterSaga)

export default store
