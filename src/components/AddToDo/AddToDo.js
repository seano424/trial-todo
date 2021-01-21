import React, { Component } from 'react'
import './AddToDo.css'
class AddToDo extends Component {

  state = {
    name: ""
  }

  nameChangedHandler = (event) => {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div className="Container">
        <input className="Content" 
        type="text" 
        placeholder="What's your ToDo?"
        onChange={this.nameChangedHandler}
        value={this.state.name}/>
        <button onClick={() => this.props.toDoAdded(this.state.name)} className="Content">Add ToDo</button>
      </div>
    )
  }
}

export default AddToDo;