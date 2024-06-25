import React, { useState } from 'react';
import AppName from './components/AppName';
import AddTodo from './components/AddToDo'; // Corrected import name
import TodoItems from './components/TodoItems';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import { ToDoItemsContext } from './store/todo-items-store';

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

  const addData = (todoInput, todoDate) => {
    console.log('The todo input is ' + todoInput + ' the todo date is ' + todoDate);

    const newToDoItems = [...toDoItems, { name: todoInput, dueDate: todoDate }];
    setToDoItems(newToDoItems);

  };

  const deleteData = (itemName) => {
    const afterDeleteItems = toDoItems.filter(item => item.name !== itemName)
    setToDoItems(afterDeleteItems)
  }

  const defaultToDoItems = [{ name: "Go to Gym", dueDate: "Today" }]

  return (
    <ToDoItemsContext.Provider
      value={{
        // toDoItems: toDoItems,
        // addData: addData,
        // deleteData: deleteData

        // if key and value same then we can write them directly
        toDoItems,
        addData,
        deleteData
      }}
    >



      {/* instead of passing the default value we pass the actual state of the variable */}
      {/* whatever that is there inside the provider everyone will be able to use the context */}

      <div className="center">
        <AppName />

        <AddTodo />
        {/* <WelcomeMessage toDoItems={toDoItems} /> */}

        <WelcomeMessage />
        {/* <TodoItems todoItems={toDoItems} handleDeleteClicked={handleDeleteClicked} /> Pass toDoItems instead of initialTodoItems */}

        <TodoItems />
      </div>
    </ToDoItemsContext.Provider>
  );
}

export default App;
