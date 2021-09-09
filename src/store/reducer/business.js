import { createSlice } from "@reduxjs/toolkit"


/**
 * @type {BusinessReducerState} initialState
 */
const initialState = {
  status: 'IDLE',
  businesses: [],
}

const business = createSlice({
  initialState,
  name: 'business',
  reducers: {
    idle: (state) => {
      state.status = "IDLE"
    },
    query: (state) => {
      state.status = "LOADING"
    },
    /**
     * @param {BusinessReducerState} state
     * @param {PayloadAction<BusinessPayload>} action
     * */
    setSuccess: (state, action) => {
      state.status = 'SUCCESS'
      state.businesses = action.payload.businesses
    },
    /**
     * @param {BusinessReducerState} state
     * */
    setFailure: (state) => {
      state.status = 'FAILURE'
    },
  }
})

export const { query, setSuccess } = business.actions

export default business.reducer
