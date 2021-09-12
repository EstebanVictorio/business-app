import { createSlice } from "@reduxjs/toolkit"
import { add, del, edit, query } from "./reducers"

/**
 * @type {BusinessReducerState} initialState
 */
const initialState = {
  createStatus: 'IDLE',
  editStatus: 'IDLE',
  deleteStatus: 'IDLE',
  queryStatus: 'IDLE',
  businesses: [],
}

const business = createSlice({
  initialState,
  name: 'business',
  reducers: {
    addIdle: add.idle,
    addLoading: add.loading,
    addSuccess: add.success,
    addFailure: add.failure,
    deleteIdle: del.idle,
    deleteLoading: del.loading,
    deleteSuccess: del.success,
    deleteFailure: del.failure,
    editIdle: edit.idle,
    editLoading: edit.loading,
    editSuccess: edit.success,
    editFailure: edit.failure,
    queryIdle: query.idle,
    queryLoading: query.loading,
    querySuccess: query.success,
    queryFailure: query.failure,
  }
})

export const {
  addIdle,
  addLoading,
  addSuccess,
  addFailure,
  deleteIdle,
  deleteLoading,
  deleteSuccess,
  deleteFailure,
  editIdle,
  editLoading,
  editSuccess,
  editFailure,
  queryIdle,
  queryLoading,
  querySuccess,
  queryFailure,
  
} = business.actions

export default business.reducer
