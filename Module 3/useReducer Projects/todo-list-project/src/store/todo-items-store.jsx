import { createContext, useContext, useReducer } from "react";

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



const TodoItemsContextProvider = ({ children }) => {

    const toDoItemsReducer = (currentToDoItems, action) => {

        let newToDoItems = currentToDoItems;

        if (action.type === 'NEW_ITEM') {
            newToDoItems = [
                ...currentToDoItems,
                { name: action.payLoad.itemName, dueDate: action.payLoad.itemDate }];



        }
        else if (action.type === 'DELETE_ITEM') {
            newToDoItems = currentToDoItems.filter(item => item.name !== action.payLoad.itemName)
        }

        return newToDoItems
    }

    // const [toDoItems, setToDoItems] = useState([]);
    const [toDoItems, dispatchToDoItems] = useReducer(toDoItemsReducer, []);

    const addData = (itemName, itemDate) => {

        const newItemAction = {
            type: 'NEW_ITEM',
            payLoad: {
                itemName,
                itemDate
            }
        }

        dispatchToDoItems(newItemAction)


        // console.log('The todo input is ' + todoInput + ' the todo date is ' + todoDate);

        // const newToDoItems = [...toDoItems, { name: todoInput, dueDate: todoDate }];
        // setToDoItems(newToDoItems);

    };




    const deleteData = (itemName) => {

        const deleteItemAction = {
            type: 'DELETE_ITEM',
            payLoad: {
                itemName
            }
        }

        dispatchToDoItems(deleteItemAction)
    }

    return (

        <ToDoItemsContext.Provider
            value={{
                // toDoItems: toDoItems,
                // addData: addData,
                // deleteData: deleteData

                // if key and value same then we can write them directly
                toDoItems,
                addData,
                deleteData
            }}
        >
            {children}

        </ToDoItemsContext.Provider>

    )






}


export default TodoItemsContextProvider;