import React, { useState } from 'react';

function AddTodo({ onAddButton }) {


    const [todoName, setTodoName] = useState('')
    const [todoDate, setTodoDate] = useState('')

    const handleInputChange = (e) => {
        setTodoName(e.target.value)
    }
    const handleDateChange = (e) => {
        setTodoDate(e.target.value)
    }

    const handleAddButtonClicked = () => {
        onAddButton(todoName, todoDate)
        setTodoName('');
        setTodoDate('');
    }




    return (
        <div className="add-todo">
            <div className="input-group">
                <input type="text" placeholder="Enter Todo Here" value={todoName} style={{ margin: '20px' }} onChange={handleInputChange} />
            </div>
            <div className="input-group">
                <input type="date" style={{ margin: '20px' }} value={todoDate} onChange={handleDateChange} />
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
