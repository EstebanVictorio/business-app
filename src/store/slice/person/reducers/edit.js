/**
 * @type {PersonReducer} edit
 */
const edit = {
  loading: (state) => {
    state.editStatus = 'LOADING'
  },
  success: (state, action) => {
    for (let i = 0; i < state.persons.length; i++) {
      const person = state.persons[i]
      if(person.personId === action.payload.personId) {
        state.persons[i].name = action.payload.name
        state.persons[i].email = action.payload.email
        state.persons[i].phone = action.payload.phone
        state.persons[i].role = action.payload.role
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
