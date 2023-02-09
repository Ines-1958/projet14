const initialState = {
  employees: [],
}

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATEEMPLOYEE':
      const newArr = [...state.employees]
      newArr.push(action.payload)
      return {
        employees: newArr,
      }
  }

  return state
}

export default employeeReducer
