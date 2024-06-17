Props :
Mechanism for passing data
read only by default
passing from parent to child
it is defined as an attribute in jsx
data flows one way parent to child
props are immutable cannot change

Eg:
Parent:
<Yash name='Yash' age=20 />

Child:
function Yash(props) {

<h1>I am {props.name} and I am {props.age} years old</h1>
}

Example of filter:
Parent:
function DisplayItem() {
const fruits = [some fruits]

    return (
        fruits.map((fruit)=>{
            <FruitItem fruitItem={fruit} key={fruit}>
             // key is mandatory but as to differentiate betn elements
        })
    )

}

Child:
function FruitItem(props) {

// Destructuring the object Met1
//function FruitItem({fruitItem}) {

// Destructuring the object Met2
const {fruitItem }= props

<h1>The fruit is : {props.fruitItem}</h1>
}

Note: we can also pass arrays as props
App.js
function App() {
const fruits = [some fruits]

     return (
    <DisplayItem items={fruits} />  // so with this we can do items.map and so on
     )

}

CSS Modules:

- localized class names to avoid global conflicts
- styles are scoped to individual components
- helps in creating component specific styles
- automatically generates unique class names
- promotes modular and maintainable css
- can use alongside global css when needed

Naming: Component_Name.module.css
it creates a unique id for each css so that even if the css is repeated then there is no issue
Eg: .yash-chavan{color: red}

for importing: import styles from 'Component_Name.module.css' // instead of styles you can use any name
for using: className={`${style['yash-chavan']} my-class-name`}

Instead of passing hardcore values we can use object to define the data
const toDoItems = [
{
name: 'Bring Milk',
date: '1/2/23'
},
{
name: 'Eat food',
date: '2/3/24'
}
]

itemName={toDoItems} // passing the array of objects
// rendering the component as per requirement
{toDoItems.map(item => <ToDoItem date={item.date} name={item.name}>)} // we are passing values here as props to the toDoItem component which will render the things in its component

we can also pass styles as props
Eg:

Passing Children :

- children is a special prop for passing elements into components
- used for flexible and reusable component designs
- common in layout or container components
- accessed with props.children
- can be any content: string, numbers, jsx or components

Eg:

function Container(props) {
return (

<div>
{props.children}
</div>
)
}

Container Component:
<Container>

<h1>This is a heading</h1>
<p>this is a paragraph</p>
</Container>

<Container>

this is another container with the same layout
</Container>

Event Handling:
react events use camel casing - onClick
use synthetic events not browser events

to add multiple classes className=`${styles.button} btn` // here btn is normal class and button is the class from module.css

creating a onclick listener
onClick= {()=> console.log('Event is clicked')}
onClick= {()=> console.log(`${item} event is clicked`)}

calling method after onclick
const handleButtonClicked = ()=> {
console.log(`The item is ${item}`)
}

onClick={handleButtonClicked}

using event object for onClick - what is there in event object
const handleButtonClicked = (e) => {
console.log(e)
}

event handlers can be functions or arrow functions
onClick ={(e)=> {handleButtonClicked(e)}}

Note: react has its own synthetic event object, which is not same as the normal browser events.
this is as react is used on different browsers and also as native android
target -> the id or class button that it is clicked

on change events are used for form inputs

const handleOnChange(e)=> {
console.log(e.target.value)
}

<input type="text" placeholder = "enter name" onChange={handleOnChange}   /> // we just pass the reference and we automatically pass the event as well

avoid inline arrow functions for jsx components

Passing function via props:

- parent to child communication

<Item item={foodItem} handleButton={()=> console.log('clicked')}>
<Item item={foodItem} handleButton={()=> console.log(`${foodItem} bought`)}>

function Item({item, handleButton}) {
<button onClick={handleButton}> {item} </button>
}

- parent defines a function and child invokes it

Problem due to which we use states

let letter = 'Entered food item'

function App() {
const handleLetter= (e)=>{
letter = e.target.value
}

    return (
        <p onClick={handleLetter} >{letter}</p>   // here the value will not be updated as the state is the same here
    )

}
