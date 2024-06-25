import { createContext, useContext } from "react";

// export const ToDoItemsContext = createContext([]);
// here we just simply created a basic context of the variable by initializing it with the empty array

// main work of context api is to take a general value and make it available to everyone


// for auto-completion we can do
export const ToDoItemsContext = createContext(
    {
        toDoItems: [],
        addData: () => { },
        deleteData: () => { }
    }
)