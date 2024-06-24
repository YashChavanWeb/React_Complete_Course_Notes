Forms:
each input's state is stored in the component's state
use onChange to detect input changes
use onSubmit function for submission and e.preventDefault() for preventing reload
implement custom validation or use third party libraries

Note: two way binding: when we set the state variable as the value of the input then two way binding takes place. where when we change state then input is updated and vice versa

action - path of the server where we want to send the data
by default due to this the page is reloaded
so we use onSubmit = {handleSubmitButton}

<form
onSubmit = {handleSubmitButton}
>
//content
</form>

2nd Hook: useRef

- just keep the state don't repaint the UI then use useRef

- 1st Hook was useState
- useRef allows access to DOM elements and retains mutable values without re-renders.
  whatever I want to render I will decide when to re-render you just update the value and store it in the variable
- used with the ref attribute for direct DOM interactions
- can hold previous state or prop values
- not limited to DOM references: can hold any value
- Ref can be passed as props also

Note: state is component wise
so if we use a component twice then each component will have different state

- if we declare a variable outside function then it will become js wise variable and will be accessible by every component
- so to avoid this we use useref

Eg:
const noOfUpdates = useRef(0);

function change() {
noOfUpdates.current += 1 // here we use current to get the current value as noOfUpdates is just a reference to the useRef hook
}

function clickHere() {
console.log(noOfUpdates)

// so with this the UI is not reloaded/repainted and we get the value as well which we can use later
}

To do list example:
Before:
const [todoName, setTodoName] = useState('')
const [todoDate, setTodoDate] = useState('')

const handleInputChange = (e) => {
setTodoName(e.target.value)
}
const handleDateChange = (e) => {
setTodoDate(e.target.value)
}

const handleAddButtonClicked = () => {
onAddButton(todoName, todoDate)
setTodoName('');
setTodoDate('');
}

<div className="input-group">
                <input type="text" placeholder="Enter Todo Here" value={todoName} style={{ margin: '20px' }} onChange={handleInputChange} />
            </div>
            <div className="input-group">
                <input type="date" style={{ margin: '20px' }} value={todoDate} onChange={handleDateChange} />
            </div>

After:
const elementName = useRef();
const elementDate = useRef();

    const handleAddButtonClicked = () => {

        const name = elementName.current.value;
        const date = elementDate.current.value;

        onAddButton(name, date);

        name = ''
        date = ''
    }

<div className="input-group">
                <input type="text" placeholder="Enter Todo Here" style={{ margin: '20px' }} ref={elementName} />
            </div>
            <div className="input-group">
                <input type="date" style={{ margin: '20px' }} ref={elementDate} />
            </div>

Updating states from previous states:

1. Spread Operator
   arr1 = [1,2,3,4]
   arr2 = [[arr1], 5,6] // this is wrong
   arr2 = [...arr1, 5,6 ]

we use spread operator as we cannot change the value of the state so we update it simply by taking in a new array and then passing it
setArrayState(arr2)

But when there are complex apps then this method can give error
react works asynchronously
4 states to update - first state dependent on 4th state - but it takes old value of the state which can create problem

If we want to set newly then no issues use spread
but if we want to set on the basis of the previous value / Update
here we use a anonymous method in the state function

setArrayState((currentValue)=> {
const newToDo = [
...currValue, 4,5
]

return newToDo
})

// Better way
setArrayState((currentValue)=> [
...currValue, 4,5
])

we mostly use functional updates
(existing)=> {postData, ...existingPost}
to avoid state values during asynchronous updates
