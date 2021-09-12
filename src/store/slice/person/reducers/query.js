/**
 * @type {PersonReducer} query
 */
const query = {
  loading: (state) => {
    state.queryStatus = 'LOADING'
  },
  success: (state, action) => {
    state.queryStatus = 'SUCCESS'
    state.persons = action.payload.persons
  },
  failure: (state) => {
    state.queryStatus = 'FAILURE'
  },
  idle: (state) => {
    state.queryStatus = 'IDLE'
  },
}

/**
 * @type {PersonReducer} querySingle
 */
const querySingle = {
  loading: (state) => {
    state.querySingleStatus = 'LOADING'
  },
  success: (state, action) => {
    state.querySingleStatus = 'SUCCESS'
    state.person = action.payload.person
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
