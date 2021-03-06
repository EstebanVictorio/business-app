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

/**
 * @type {BusinessReducer} querySingle
 */
const querySingle = {
  loading: (state) => {
    state.querySingleStatus = 'LOADING'
  },
  success: (state, action) => {
    state.querySingleStatus = 'SUCCESS'
    state.business = action.payload.business
  },
  failure: (state) => {
    state.querySingleStatus = 'FAILURE'
  },
  idle: (state) => {
    state.querySingleStatus = 'IDLE'
  },
}

export {
  query,
  querySingle,
}
