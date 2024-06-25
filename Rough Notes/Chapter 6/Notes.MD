Main thing is that, for eg if you login to facebook, then the details like email and all are required by many components so we will not keep passing those props to every component.

1. **Prop drilling**:

   - Passing data through multiple layers of components without using props directly in intermediate components.
   - When you need to send data from a top-level component to a deeply nested one, prop drilling involves passing the data through all the intermediary components in between.

2. **Folder setup**:

   - Organizing your React project files and components into folders based on functionality or feature.
   - Creating directories to store related components, styles, and other files to keep your project structured and manageable.

3. **Initialization**:

   - Setting up and preparing the initial state or values required for your application or components.
   - Getting everything ready at the start, like defining variables, fetching initial data, or setting default configurations.

4. **Provider**:

   - A component provided by React Context API that allows consuming components to subscribe to context changes.
   - It wraps your application and makes the shared data available to all components that need it without manually passing props through each level.

5. **Access value**:

   - Retrieving the data or state from the context within a consuming component.
   - Getting the information stored in the context to use it in your component's logic or UI.

6. **Export functions**:

   - Making functions defined in a module available for use in other parts of your application.
   - Sharing your code functions so that other parts of your app can call and use them.

Example:

<!-- Using it in the app -->

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

<!-- using it in AddTodo -->

import React, { useContext, useRef, useState } from 'react';
import { ToDoItemsContext } from '../store/todo-items-store';

function AddTodo() {

    const { addData } = useContext(ToDoItemsContext)


    // const [todoName, setTodoName] = useState('')
    // const [todoDate, setTodoDate] = useState('')

    const elementName = useRef();
    const elementDate = useRef();


    // const handleInputChange = (e) => {
    //     setTodoName(e.target.value)
    // }
    // const handleDateChange = (e) => {
    //     setTodoDate(e.target.value)
    // }

    const handleAddButtonClicked = () => {

        let myName = elementName.current.value;
        let myDate = elementDate.current.value;

        addData(myName, myDate);

        myName = ''
        myDate = ''



        // setTodoName('');
        // setTodoDate('');
    }




    return (
        <div className="add-todo">


            {/* <div className="input-group">
                <input type="text" placeholder="Enter Todo Here" value={todoName} style={{ margin: '20px' }} onChange={handleInputChange} />
            </div>
            <div className="input-group">
                <input type="date" style={{ margin: '20px' }} value={todoDate} onChange={handleDateChange} />
            </div> */}

            <div className="input-group">
                <input type="text" placeholder="Enter Todo Here" style={{ margin: '20px' }} ref={elementName} />
            </div>
            <div className="input-group">
                <input type="date" style={{ margin: '20px' }} ref={elementDate} />
            </div>
            <div className="input-group">
                <button type="button" style={{ margin: '20px' }}
                    onClick={handleAddButtonClicked}
                >Add</button>
            </div>
        </div>
    );

}

export default AddTodo;

<!-- using it in To Do items -->

import React, { useContext } from 'react';
import TodoItem from './TodoItem'; // Import TodoItem component
import { ToDoItemsContext } from '../store/todo-items-store';

// const TodoItems = ({ todoItems, handleDeleteClicked }) => {
const TodoItems = () => {

    // const toDoItemsFromContext = useContext(ToDoItemsContext)
    //  here using the useContext hook we have got the context of the toDoItems

    const { toDoItems } = useContext(ToDoItemsContext)



    return (
        <div className="todo-items">
            {toDoItems.map((item, index) => (
                <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} />
            ))}
        </div>
    );

};

export default TodoItems;
