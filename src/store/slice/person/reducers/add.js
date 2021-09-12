/**
 * @type {PersonReducer} add
 */
const add = {
  loading: (state) => {
    state.createStatus = 'LOADING'
  },
  success: (state,action) => {
    state.persons.push(action.payload.created)
    state.createStatus = 'SUCCESS'
  },
  failure: (state) => {
    state.createStatus = 'FAILURE'
  },
  idle: (state) => {
    state.createStatus = 'IDLE'
  },
}

export default add
