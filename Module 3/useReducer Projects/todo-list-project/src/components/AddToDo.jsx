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
