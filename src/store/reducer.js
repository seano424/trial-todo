import * as actionTypes from './actions'

const initialState = {
  toDos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo = {
        id: Math.random(),
        toDoItem: action.toDo
      }
      return {
        ...state,
        toDos: state.toDos.concat(newTodo)
      }
    case actionTypes.DELETE_TODO:
      const updatedToDoArray = state.toDos.filter(todo => todo.id !== action.id)
      return {
        ...state,
        toDos: updatedToDoArray
      }
  
    default:
      break;
  }
  return state
}

export default reducer