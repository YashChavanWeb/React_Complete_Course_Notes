import React from 'react'

function Alert(props) {


    const capitalize = (word) => {
        const capital = word.toLowerCase()
        return capital.charAt(0).toUpperCase() + capital.slice(1)

    }


    return (

        // here props.alert is initially null as alert is not created yet 
        // so to solve this issue we use a different syntax

        // give the alert in backticks so that the type can change the color of alert accordingly

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
        </div >
    )
}

export default Alert
