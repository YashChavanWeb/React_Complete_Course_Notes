// Create a React element using React.createElement()
const element = React.createElement(
    'div',      // type
    { className: 'container' }, // props
    'Hello, React!' // children
);

// Render the React element to the DOM
ReactDOM.render(element, document.getElementById('root'));

// Log the React element to the console to show it as an object
console.log(element);


