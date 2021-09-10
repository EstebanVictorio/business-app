/**
 * @type {BusinessReducer} edit
 */
const edit = {
  loading: (state) => {
    state.editStatus = 'LOADING'
  },
  success: (state, action) => {
    for (let i = 0; i < state.businesses.length; i++) {
      const business = state.businesses[i]
      if(business.businessId === action.payload.businessId) {
        state.businesses[i].name = action.payload.name
        break
      }
    }
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
