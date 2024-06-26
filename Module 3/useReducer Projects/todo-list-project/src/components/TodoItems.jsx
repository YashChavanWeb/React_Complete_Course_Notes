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
