import React from 'react'
import './ToDo.css'

const toDo = (props) => {
  
  let headerClasses = ['Item']
  console.log(props);

  return (
    <div className="ToDos">
      <h1 onClick={props.lineThrough} 
      className={headerClasses.join(" ")}>{props.toDo}</h1>
      <h1 onClick={props.clicked}>REMOVE</h1>
    </div>
  )
}

export default toDo