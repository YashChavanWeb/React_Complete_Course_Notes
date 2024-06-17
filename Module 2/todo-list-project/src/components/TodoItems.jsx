import React from 'react';
import TodoItem from './TodoItem'; // Import TodoItem component

const TodoItems = ({ todoItems, handleDeleteClicked }) => {
    return (
        <div className="todo-items">
            {todoItems.map((item, index) => (
                <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} handleDeleteClicked={handleDeleteClicked} />
            ))}
        </div>
    );
};

export default TodoItems;
