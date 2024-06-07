import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState('Enter your text here');

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

    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={convertToUpper}>Convert To Uppercase</button>
        </div >
    )
}

export default TextForm
