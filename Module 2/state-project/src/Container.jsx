import React from 'react';
import Input from './Input';

const Container = (props) => {

    /*
    - Renders an <Input> component and any children it receives.
    - Styled the container div with fixed width and optional styles.
    */


    return (
        <div style={{ width: 500 }}>
            <Input style={{ backgroundColor: 'white', color: 'black' }} onKeyDown={props.onKeyDown} />
            {props.children}
        </div>
    );
};

export default Container;
