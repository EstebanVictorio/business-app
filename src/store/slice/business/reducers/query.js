/**
 * @type {BusinessReducer} query
 */
const query = {
  loading: (state) => {
    state.queryStatus = 'LOADING'
  },
  success: (state, action) => {
    state.queryStatus = 'SUCCESS'
    state.businesses = action.payload.businesses
  },
  failure: (state) => {
    state.queryStatus = 'FAILURE'
  },
  idle: (state) => {
    state.queryStatus = 'IDLE'
  },
}

export default query
