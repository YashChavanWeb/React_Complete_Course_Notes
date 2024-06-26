import React, { useState } from 'react';
import AppName from './components/AppName';
import AddTodo from './components/AddToDo'; // Corrected import name
import TodoItems from './components/TodoItems';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import TodoItemsContextProvider, { ToDoItemsContext } from './store/todo-items-store';
import { useReducer } from 'react';



function App() {


  return (
    <TodoItemsContextProvider>

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

    </TodoItemsContextProvider>
  );
}

export default App;
