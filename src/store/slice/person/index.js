import { createSlice } from "@reduxjs/toolkit"
import { add, del, edit, query, querySingle } from "./reducers"


/**
 * @type {PersonReducerState} initialState
 */
const initialState = {
  createStatus: 'IDLE',
  editStatus: 'IDLE',
  deleteStatus: 'IDLE',
  queryStatus: 'IDLE',
  querySingleStatus: 'IDLE',
  persons: [],
  person: {},
}


const person = createSlice({
  initialState,
  name: 'person',
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
    querySingleIdle: querySingle.idle,
    querySingleLoading: querySingle.loading,
    querySingleSuccess: querySingle.success,
    querySingleFailure: querySingle.failure,
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
  querySingleIdle,
  querySingleLoading,
  querySingleSuccess,
  querySingleFailure,
  
} = person.actions

export default person.reducer
