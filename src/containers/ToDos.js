import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

import AddToDo from '../components/AddToDo/AddToDo'
import ToDo from '../components/ToDo/ToDo'

class ToDos extends Component {

  state = {
    crossedOut: false
  }

  lineThrough = () => {
    this.setState(prevState => {
      return {
        crossedOut: !prevState.crossedOut
      }
    })
  }

  render () {
    return (
      <div>
        <AddToDo toDoAdded={this.props.onToDoAddedHandler}/>
        {this.props.todos.map(todo => (
          <ToDo
          lineThrough={this.lineThrough} 
          clicked={() => this.props.onToDoDeletedHandler(todo.id)}
          key={todo.id}
          toDo={todo.toDoItem}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.toDos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToDoAddedHandler: (toDo) => dispatch({type: actionTypes.ADD_TODO, toDo: toDo}),
    onToDoDeletedHandler: (id) => dispatch({type: actionTypes.DELETE_TODO, id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);