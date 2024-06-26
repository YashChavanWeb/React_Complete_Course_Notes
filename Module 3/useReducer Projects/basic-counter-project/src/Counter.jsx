import React, { useReducer } from 'react'


const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1
            break;

        case 'Decrement':
            return state - 1
            break;

        default:
            return state
            break;
    }
}

function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState)


    return (



        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch('Increment')} >Increment</button>
            <button onClick={() => dispatch('Decrement')}>Decrement</button>
        </>
    )
}

export default Counter
