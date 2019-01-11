import React, { useState } from 'react';
import './vendors/css/reset.css';
import './App.css';
import Todo from './components/todo';
import TodoForm from './components/todo-form';


const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: 'Lear React hooks',
      isCompleted: false
    },
    {
      id: 1,
      text: 'Read documentation',
      isCompleted: false
    },
    {
      id: 2,
      text: "Build the app",
      isCompleted: true
    }
  ]);
  
  const addTodo = text => {
    const newTodos = [...todos, {
      id: todos.length,
      text
    }];
    setTodos(newTodos);
  }
  
  const toggleTodo = (index, todo) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }
  
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} toggleTodo={toggleTodo} />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;