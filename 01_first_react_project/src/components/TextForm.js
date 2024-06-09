import React, { useState } from 'react';
import './TextForm.css';

function TextForm(props) {

    const [text, setText] = useState('Default Text');
    const [bold, setBold] = useState(false);
    const [color, setColor] = useState(false);

    // Update the state correctly
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const convertToUpper = () => {
        setText(text.toUpperCase());
        props.showAlertOn('Converted to Uppercase', 'success')
    };

    const convertToLower = () => {
        setText(text.toLowerCase());
        props.showAlertOn('Converted to Lowercase', 'success')

    };

    const clearTheText = () => {
        setText('');
        props.showAlertOn('Cleared the text', 'success')

    };

    const boldText = () => {
        setBold(!bold);
        props.showAlertOn('Made the text bold', 'success')

    };

    const changeColor = () => {
        setColor(!color);
        props.showAlertOn('Changed the color to red', 'success')

    };

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                    <textarea className={`form-control ${bold ? 'bold-text' : ''} ${color ? 'change-color' : ''}`} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={convertToUpper}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={convertToLower}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={boldText}>Bold Text</button>
                <button className="btn btn-primary mx-2" onClick={clearTheText}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={changeColor}>Change Color</button>
            </div>

            <div className="container my-3">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text Summary</h1>
                <ul className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <li>No. of characters : {text.length}</li>
                    <li>No. of words : {text.split(" ").length}</li>
                    {/* split returns an array of words and its length will be no of words */}
                    <li>Minutes to Read: {0.008 * text.split(" ").length}</li>
                </ul>

                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview of Text:</h2>
                <p className={`form-control ${bold ? 'bold-text' : ''} ${color ? 'text-danger' : ''}`}>
                    {text.length > 0 ? text : "Enter some text to preview"}
                </p>

            </div >
        </>
    );
}

export default TextForm;
