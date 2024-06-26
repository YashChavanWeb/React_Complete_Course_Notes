## Context API Usage in React

This README covers the essential concepts and implementation steps for using the Context API in a React application. It includes an overview of important points, folder setup, initialization, provider setup, accessing values, and more.

### Table of Contents

1. [Introduction](#introduction)
2. [Prop Drilling](#prop-drilling)
3. [Folder Setup](#folder-setup)
4. [Initialization](#initialization)
5. [Provider](#provider)
6. [Access Value](#access-value)
7. [Dynamic Data](#dynamic-data)
8. [Export Functions](#export-functions)
9. [Example Code Snippets](#example-code-snippets)
10. [Notes](#notes)

## Introduction

When building a React application, passing data to multiple components can become cumbersome through a process known as prop drilling. The Context API simplifies this by allowing data to be shared across components without explicitly passing props at every level.

## Prop Drilling

Prop drilling refers to passing data through multiple layers of components by manually forwarding props from a top-level component to deeply nested ones. This can make the code harder to maintain and understand.

## Folder Setup

Organize your React project files and components into folders based on functionality or feature. This structure helps keep the project manageable.

```
src/
  components/
    AddTodo.js
    AppName.js
    TodoItems.js
    WelcomeMessage.js
  store/
    todo-items-store.js
  App.js
  index.js
```

## Initialization

Set up the initial state or values required for your application. Define variables, fetch initial data, or set default configurations at the start.

## Provider

A Provider component from the Context API allows consuming components to subscribe to context changes. It wraps the application, making shared data available to all components that need it.

```jsx
import React, { createContext, useState } from "react";

export const ToDoItemsContext = createContext();

export const ToDoItemsProvider = ({ children }) => {
  const [toDoItems, setToDoItems] = useState([]);

  const addData = (name, dueDate) => {
    setToDoItems([...toDoItems, { name, dueDate }]);
  };

  const deleteData = (index) => {
    setToDoItems(toDoItems.filter((_, i) => i !== index));
  };

  return (
    <ToDoItemsContext.Provider value={{ toDoItems, addData, deleteData }}>
      {children}
    </ToDoItemsContext.Provider>
  );
};
```

## Access Value

Retrieve data or state from the context within a consuming component using the `useContext` hook.

```jsx
import React, { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const { toDoItems } = useContext(ToDoItemsContext);

  return (
    <div className="todo-items">
      {toDoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
```

## Dynamic Data

Handle dynamic data by updating the context state through functions defined within the Provider.

## Export Functions

Functions defined in a module can be exported for use in other parts of your application, ensuring code reusability and separation of concerns.

## Example Code Snippets

### Using the Provider in the App

```jsx
import React from "react";
import { ToDoItemsProvider } from "../store/todo-items-store";
import AddTodo from "../components/AddTodo";
import TodoItems from "../components/TodoItems";
import AppName from "../components/AppName";
import WelcomeMessage from "../components/WelcomeMessage";

function App() {
  return (
    <ToDoItemsProvider>
      <div className="center">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </ToDoItemsProvider>
  );
}

export default App;
```

### Adding a Todo Item

```jsx
import React, { useContext, useRef } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addData } = useContext(ToDoItemsContext);
  const elementName = useRef();
  const elementDate = useRef();

  const handleAddButtonClicked = () => {
    let myName = elementName.current.value;
    let myDate = elementDate.current.value;

    addData(myName, myDate);

    elementName.current.value = "";
    elementDate.current.value = "";
  };

  return (
    <div className="add-todo">
      <div className="input-group">
        <input type="text" placeholder="Enter Todo Here" ref={elementName} />
      </div>
      <div className="input-group">
        <input type="date" ref={elementDate} />
      </div>
      <div className="input-group">
        <button type="button" onClick={handleAddButtonClicked}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
```

## Notes

- Always wrap your application with the Provider component to make the context available throughout your app.
- Use the `useContext` hook to access context values within your components.
- Organize your project folders and files logically to maintain a clean codebase.
- Separate logic and UI components to enhance readability and maintainability.
