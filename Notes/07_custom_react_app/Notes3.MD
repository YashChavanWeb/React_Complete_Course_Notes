# React Rendering and JSX Usage

## Rendering

When writing JSX in any function, it is parsed into a tree-like structure object. In `main.jsx`, we have the flexibility to render our own functions or even our own objects.

### Running a Function in `main.jsx`

```jsx
function Name() {
    // Function code
}

render (
    Name()
)
```

### Running HTML Code Object in `main.jsx`

```jsx
const objectValue = (
    // HTML Code
)

render (
    objectValue
)
```

### Running an Actual Key-Value Object in `main.jsx`

```jsx
const reactElement = React.createElement(
    'a',
    { href: 'google.com', target: '_blank' },
    'Click Me'
)
// The above is the actual syntax of the React tree

render(
    reactElement
)
```

## JSX - How to Use Variables

- `{variableName}`: Treated as a variable.
- `{variableName}`: Evaluated expression - final expression output.

```jsx
const variableName = 'Yash Chavan'
const reactElement = React.createElement(
    'a',
    { href: 'google.com', target: '_blank' },
    'Click Me',
    variableName // Variables come in the object as it is
)
// The above is the actual syntax of the React tree

render(
    reactElement
)
