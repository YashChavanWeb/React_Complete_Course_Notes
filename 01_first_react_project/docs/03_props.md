# Props

## Key Points

- Props are used to pass data from parent to child components in React.
- Props are immutable, meaning they cannot be changed by the receiving component.

## Using `propTypes`

`propTypes` help to ensure that components use the correct data types for their props.

### Component with `propTypes` and `defaultProps`

```javascript
import React from "react";
import PropTypes from "prop-types";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Define propTypes to ensure correct data types
Greeting.propTypes = {
  name: PropTypes.string.isRequired, // 'name' is a required prop of type string
};

// Set default props
Greeting.defaultProps = {
  name: "Guest", // Default value for 'name' prop
};

export default Greeting;
```

````

### Usage Example

In another file, you can use the `Greeting` component like this:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting /> {/* Will display: Hello, Guest! */}
      <Greeting name="Yash" /> {/* Will display: Hello, Yash! */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

### Explanation

1. **PropTypes Declaration**:

   ```javascript
   Greeting.propTypes = {
     name: PropTypes.string.isRequired,
   };
   ```

   - `propTypes` is used to specify that the `name` prop is a required string.

2. **Default Props**:
   ```javascript
   Greeting.defaultProps = {
     name: "Guest",
   };
   ```
   - `defaultProps` is used to provide a default value for the `name` prop if it is not passed.

This example helps in understanding the basic usage of `propTypes` and `defaultProps` to ensure type safety and provide default values for React components.

### Important Checks

- Ensure `propTypes` are used with proper data types only.
- Adding `isRequired` to a prop ensures that a warning is shown if the prop is not passed.

### Setting Default Values

Default props can be defined to ensure that a component has default values if specific props are not passed.

```javascript
Navbar.defaultProps = {
  title: "Yash Chavan",
};
```

```

````
