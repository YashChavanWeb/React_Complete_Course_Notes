# React Components and Event Handling

## Props in React

Props are a mechanism for passing data from parent to child components in React. They are immutable and serve to maintain unidirectional data flow.

### Usage

- Defined as attributes in JSX.
- Data flows one way: from parent to child.

### Key Points

- Props are read-only by default.
- Used to pass data or even functions from parent to child components.

### Examples

**Parent Component:**

```jsx
// ParentComponent.jsx
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return <ChildComponent name="Yash" age={20} />;
}

export default ParentComponent;
```

**Child Component:**

```jsx
// ChildComponent.jsx
import React from "react";

function ChildComponent(props) {
  return (
    <h1>
      I am {props.name} and I am {props.age} years old.
    </h1>
  );
}

export default ChildComponent;
```

## CSS Modules

CSS Modules allow for localized scoping of styles in React components, preventing global style conflicts and promoting modularity.

### Usage

- Automatically generates unique class names.
- Styles are scoped to individual components.

### Key Points

- Naming convention: `ComponentName.module.css`.

### Example

**Component CSS:**

```css
/* ComponentName.module.css */
.yash-chavan {
  color: red;
}
```

**Component Usage:**

```jsx
// Component.jsx
import React from "react";
import styles from "./ComponentName.module.css";

function Component() {
  return (
    <div className={`${styles["yash-chavan"]} my-class-name`}>
      Styled Component
    </div>
  );
}

export default Component;
```

## Passing Children

The `children` prop allows flexible content insertion into React components, enabling reusable designs for layout or container components.

### Usage

- Accessed via `props.children`.
- Can contain strings, numbers, JSX, or even other components.

### Example

**Container Component:**

```jsx
// Container.jsx
import React from "react";

function Container(props) {
  return <div>{props.children}</div>;
}

export default Container;
```

**Usage of Container:**

```jsx
// App.jsx
import React from "react";
import Container from "./Container";

function App() {
  return (
    <Container>
      <h1>This is a heading</h1>
      <p>This is a paragraph</p>
    </Container>
  );
}

export default App;
```

## Event Handling

React uses synthetic events and camelCase for event handling, ensuring compatibility across browsers and platforms.

### Usage

- `onClick`, `onChange`, etc., are commonly used event handlers.
- Synthetic events are used instead of native browser events.

### Example

**Button Component:**

```jsx
// Button.jsx
import React from "react";

function Button(props) {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>{props.label}</button>;
}

export default Button;
```

**Usage of Button:**

```jsx
// App.jsx
import React from "react";
import Button from "./Button";

function App() {
  return (
    <div>
      <Button label="Click me" />
    </div>
  );
}

export default App;
```

## Passing Function via Props

Allows parent-child communication by passing functions as props.

### Usage:

```jsx
// Parent Component
function ParentComponent() {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return <ChildComponent handleClick={handleButtonClick} />;
}

// Child Component
function ChildComponent(props) {
  return <button onClick={props.handleClick}>Click me</button>;
}
```

### Key Points:

- Functions passed as props can be executed in the child component.
- Enables communication and interaction between components.
s

# React State and Props Management

## State Management

### What is State?

State represents the data that changes over time in a React component. It is local and private to the component it belongs to.

### Key Points about State:

- **Local and Private**: Accessible only within the component where it is defined.
- **Mutable**: Can be changed using special functions provided by React (like `useState`).
- **Causes Rerender**: Updating state triggers the component to rerender and reflect the new state.

### Using State in Functional Components

In functional components, state management is achieved using the `useState` hook.

```jsx
import React, { useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;
```

### Lifting State Up

To share state between components that don't have a direct parent-child relationship, you can lift the state up to their closest common ancestor.

## Props Management

### What are Props?

Props (short for properties) are how components in React communicate with each other. They are passed from parent to child component.

### Key Points about Props:

- **Parent-to-Child Communication**: Allows passing data from a parent component to a child component.
- **Immutable**: Props cannot be changed by the receiving component.
- **Trigger Rerenders**: Changes in props can cause a component to rerender with the new props.

### Example of Using Props

```jsx
import React from "react";

const ChildComponent = (props) => {
  return <p>Hello, {props.name}!</p>;
};

const ParentComponent = () => {
  return <ChildComponent name="Alice" />;
};

export default ParentComponent;
```

## Conclusion

Understanding how to manage state and props effectively is crucial for developing scalable and maintainable React applications. By mastering these concepts, you can build interactive and responsive user interfaces.

---

### Additional Tools and Libraries

- **React Icons Library**: Provides a set of ready-to-use icons for your React application.
- **React DevTools**: Browser extension for debugging React applications, inspecting component hierarchies, and monitoring state and props.
- **Inspection**: Ensuring proper state and props flow by inspecting component behaviors.
- **Performance**: Optimizing React components for better rendering performance.
- **Navigation**: Implementing navigation within a React application.
- **Filtering**: Filtering data displayed in React components based on user input.
- **Realtime Feedback**: Providing immediate feedback to users based on state changes or interactions.

