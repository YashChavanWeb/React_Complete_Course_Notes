State Management:

- state represents data that changes overtime
- state is local and private to the component
- state changes cause the component to re render
- For functional components, use useState hook
- React functions that start with word use are called Hooks
- parent component can pass state to children via props
- Lifting state up: share states by moving it to their closest common ancestor

Note:
whenever we declare a useState it returns us two elements in an array

- first element current value of state
- method that can update the state

let textArray = useState('Default state')
let textState = textArray[0]
let setTextState = textArray[1]

const handleOnChange = () => {
setTextState('Now the value is changed')
}


state vs props

State:
- local and mutable data with a component
- initialized within the component
- can change overtime
- cause re render when updated
- managed using useState in functional components

Props:
- passed into a component from its parent
- read only / immutable within the receivable component
- allow parent-to-child component communication
- changes in props can also cause a re render
