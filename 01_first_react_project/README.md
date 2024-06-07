# React Notes

## Including Bootstrap

Bootstrap is included in `index.html` with one CSS and one JS script. Ensure the following lines are present in your `index.html`:

```html
<!-- Bootstrap CSS -->
<link
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  rel="stylesheet"
/>

<!-- Bootstrap JS -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
```

## Exporting and Importing Modules

### Default Export and Import

Default export allows you to export one thing per module, such as a function, class, or variable.

#### Example:

In `yashmodule.js`:

```javascript
const a = "Default Export Example";
export default a;
```

In another file:

```javascript
import yash221 from "./yashmodule";
console.log(yash221); // Output: "Default Export Example"
```

### Named Export and Import

Named exports allow you to export multiple things from a module.

#### Example:

In `yashmodule.js`:

```javascript
const yash = "Yash";
const sarth = "Sarth";
const krisha = "Krisha";

export { yash, sarth, krisha };
```

In another file:

```javascript
import { yash, sarth, krisha } from "./yashmodule";
console.log(sarth); // Output: "Sarth"
console.log(sarth221); // This will give an error
```

## Props

### Key Points

- Props are used to pass data from parent to child components in React.
- Props are immutable, meaning they cannot be changed by the receiving component.

### Using `propTypes`

`propTypes` help to ensure that components use the correct data types for their props.
Sure, here’s a simplified example to understand how to use `propTypes` and `defaultProps` in a React component:

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

## Conclusion

Using `propTypes` and `defaultProps` helps in maintaining type safety and providing default values for your React components, making your code more robust and easier to debug.
