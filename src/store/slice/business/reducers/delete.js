/**
 * @type {BusinessReducer} del
 */
const del = {
  loading: (state) => {
    state.deleteStatus = 'LOADING'
  },
  success: (state) => {
    state.deleteStatus = 'SUCCESS'
  },
  failure: (state) => {
    state.deleteStatus = 'FAILURE'
  },
  idle: (state) => {
    state.deleteStatus = 'IDLE'
  },
}

export default del
