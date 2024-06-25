import React, { useContext } from 'react';
import { ToDoItemsContext } from '../store/todo-items-store';

function TodoItem({ todoName, todoDate, handleDeleteClicked }) {

    const { deleteData } = useContext(ToDoItemsContext)

    return (
        <div className="todo-item">
            <div className="item-details">
                <div className="todo-name">{todoName}</div>
                <div className="todo-date">{todoDate}</div>
            </div>
            <div>
                <button className="delete-btn" type="button" onClick={() => deleteData(todoName)} >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
