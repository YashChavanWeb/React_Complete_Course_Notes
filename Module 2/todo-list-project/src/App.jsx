import React, { useState } from 'react';
import AppName from './components/AppName';
import AddTodo from './components/AddToDo'; // Corrected import name
import TodoItems from './components/TodoItems';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const initialTodoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2023',
    },
    {
      name: 'Go to College',
      dueDate: '4/10/2023',
    },
    {
      name: 'Like this video',
      dueDate: 'right now',
    },
  ];

  const [toDoItems, setToDoItems] = useState([]);

  const handleAddButton = (todoInput, todoDate) => {
    console.log('The todo input is ' + todoInput + ' the todo date is ' + todoDate);

    const newToDoItems = [...toDoItems, { name: todoInput, dueDate: todoDate }];
    setToDoItems(newToDoItems);

  };

  const handleDeleteClicked = (itemName) => {
    const afterDeleteItems = toDoItems.filter(item => item.name !== itemName)
    setToDoItems(afterDeleteItems)
  }

  return (
    <div className="center">
      <AppName />


      <AddTodo onAddButton={handleAddButton} />
      {toDoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={toDoItems} handleDeleteClicked={handleDeleteClicked} /> {/* Pass toDoItems instead of initialTodoItems */}
    </div>
  );
}

export default App;
