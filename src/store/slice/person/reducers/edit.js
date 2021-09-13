/**
 * @type {PersonReducer} edit
 */
const edit = {
  loading: (state) => {
    state.editStatus = 'LOADING'
  },
  success: (state, action) => {
    const personIndex = state.persons.findIndex(person => person.personId === action.payload.personId)
    state.persons[personIndex].name = action.payload.name
    state.persons[personIndex].email = action.payload.email
    state.persons[personIndex].phone = action.payload.phone
    state.persons[personIndex].role = action.payload.role
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
