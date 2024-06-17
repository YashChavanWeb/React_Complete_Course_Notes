import React from 'react';

function TodoItem({ todoName, todoDate, handleDeleteClicked }) {
    return (
        <div className="todo-item">
            <div className="item-details">
                <div className="todo-name">{todoName}</div>
                <div className="todo-date">{todoDate}</div>
            </div>
            <div>
                <button className="delete-btn" type="button" onClick={() => handleDeleteClicked(todoName)} >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
