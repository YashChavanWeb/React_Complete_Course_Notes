import React from 'react';

const Input = ({ style, onKeyDown }) => {

    /*
    - Renders a text <input> field for adding new fruits.
    - Receives styles and onKeyDown event handler as props.
    */


    return (
        <input type="text" style={style} onKeyDown={onKeyDown} placeholder="Enter new fruit and press Enter" />
    );
};

export default Input;
