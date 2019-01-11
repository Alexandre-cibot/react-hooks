import React from 'react';

const Todo = ({index, todo, toggleTodo}) => {
  return (
    <div 
      className={"todo " + (todo.isCompleted ? 'todo-completed': '')} 
      onClick={() => toggleTodo(index, todo)}>
      <p>{todo.text}</p>
    </div>
  )
}

export default Todo;