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
