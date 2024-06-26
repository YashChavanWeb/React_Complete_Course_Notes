import React, { createContext, useContext } from 'react'
import { ToDoItemsContext } from '../store/todo-items-store'

// function WelcomeMessage({ toDoItems }) {
function WelcomeMessage() {

    const toDoItemsObj = useContext(ToDoItemsContext)
    const toDoItems = toDoItemsObj.toDoItems

    return (
        toDoItems.length === 0 && <h1>Enjoy your day</h1>
    )
}

export default WelcomeMessage
