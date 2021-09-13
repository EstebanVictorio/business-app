/**
 * @type {BusinessReducer} edit
 */
const edit = {
  loading: (state) => {
    state.editStatus = 'LOADING'
  },
  success: (state, action) => {
    const businessIndex = state.businesses.findIndex(business => business.businessId === action.payload.businessId)
    state.businesses[businessIndex].name = action.payload.name
    state.editStatus = 'SUCCESS'
  },
  failure: (state) => {
    state.editStatus = 'FAILURE'
  },
  idle: (state) => {
    state.editStatus = 'IDLE'
  },
}

export default edit
