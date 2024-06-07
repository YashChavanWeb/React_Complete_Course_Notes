import React, { useState } from 'react'
import './TextForm.css';

function TextForm(props) {

    const [text, setText] = useState('Default Text');
    const [bold, setBold] = useState(false);
    const [color, setColor] = useState(false);


    // to update the state
    // 1. wrong way - text = ""
    // 2. correct way - setText("Enter Text")

    const handleOnChange = (event) => {
        setText(event.target.value)
        // console.log('Handle OnChange')
    }
    const convertToUpper = () => {
        // console.log('Upper case was clicked')
        const upperText = text.toUpperCase()
        setText(upperText)
    }
    const convertToLower = () => {
        const lowerText = text.toLowerCase()
        setText(lowerText)
    }
    const clearTheText = () => {
        const clearText = ''
        setText(clearText)
    }
    const boldText = () => {
        setBold(!bold);
    };
    const changeColor = () => {
        setColor(!color);
    };



    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className={`form-control ${bold ? 'bold-text' : ''} ${color ? 'change-color' : ''}`} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={convertToUpper}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={convertToLower}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={clearTheText}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={boldText}>Bold Text</button>
                <button className="btn btn-primary mx-2" onClick={changeColor}>Change color</button>
            </div >

            <div className="container my-3">
                <h1>Your text Summary</h1>
                <ul>
                    <li>No. of characters : {text.length}</li>
                    <li>No. of words : {text.split(" ").length}</li>
                    {/* split returns an array of words and its length will be no of words */}
                    <li>Minutes to Read: {0.008 * text.split(" ").length}</li>
                </ul>

                <h2>Preview of Text: </h2>
                <p className={`form-control ${bold ? 'bold-text' : ''} ${color ? 'change-color' : ''}`}>{text}</p>
            </div>
        </>
    )
}

export default TextForm
