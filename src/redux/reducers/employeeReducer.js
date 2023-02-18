const storedState = localStorage.getItem('state')
const initialState = storedState
  ? JSON.parse(storedState)
  : {
      employees: [],
    }

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATEEMPLOYEE':
      const newArr = [...state.employees]
      newArr.push(action.payload)
      const newState = {
        ...state,
        employees: newArr,
      }
      localStorage.setItem('state', JSON.stringify(newState))
      return newState

    default:
      return state
  }
  return state
}

export default employeeReducer
