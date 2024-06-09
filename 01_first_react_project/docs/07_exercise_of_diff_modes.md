# Text Utility Application: Button Color Modes

## Overview

This guide explains the implementation of different color modes (Warm, Cool, Hot) for buttons in a text utility application. These modes dynamically change the background color and text color of both the body and buttons.

## Concepts Used

- **DOM Manipulation:** Using JavaScript to change the styles of HTML elements dynamically.
- **React State Management:** Managing color modes using state variables in React.
- **CSS Styling:** Applying styles to buttons based on the selected mode.

## Modes Implementation

### General Approach

1. **Select Buttons:**
   - Use `document.querySelectorAll('.btn')` to select all buttons with the class `btn`.
   - Loop through the NodeList and apply the desired styles to each button.

### Warm Mode

#### Logic:

1. **Change Body Styles:**

   - Set the body background color to red.
   - Set the body text color to yellow.

2. **Change Button Styles:**
   - Set each button's background color to yellow.
   - Set each button's text color to black.

#### Code Snippet:

```javascript
const setWarmColor = () => {
  document.body.style.backgroundColor = "red";
  document.body.style.color = "yellow";

  let buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.style.backgroundColor = "yellow";
    button.style.color = "black";
  });

  setColorTheme("warm");
};
```

## Summary of Logic

1. **Select and Style Elements:**

   - Use `document.body.style` to change the background and text colors of the body.
   - Use `document.querySelectorAll('.btn')` to select all buttons with the class `btn`.

2. **Apply Styles to Buttons:**

   - Loop through the NodeList returned by `querySelectorAll` and apply the desired styles to each button.

3. **Update State:**
   - Use the `setColorTheme` function to update the state with the current color theme.

## State in React

### State

- **Definition:** State is a built-in object in React that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.
- **Usage:** State is managed within the component (using `useState` for functional components). It helps in making a component interactive and dynamic.
- **Example:**
  ```javascript
  const [colorTheme, setColorTheme] = useState("light");
  ```

### Functions and State

- **State Function (`setColorTheme`):**

  - Purpose: To update the state.
  - Functionality: When called, it triggers a re-render of the component with the new state value.
  - Example:
    ```javascript
    setColorTheme("warm");
    ```

- **Custom Functions (`setWarmColor`, `setCoolColor`, `setHotColor`):**
  - Purpose: To perform specific actions such as changing styles.
  - Functionality: They can include logic to manipulate the DOM and can also call state functions to update the state.
  - Example:
    ```javascript
    const setWarmColor = () => {
      document.body.style.backgroundColor = "red";
      document.body.style.color = "yellow";
      setColorTheme("warm");
    };
    ```

The custom functions (`setWarmColor`, `setCoolColor`, `setHotColor`) include both the logic to change the styles directly in the DOM and the logic to update the React state, ensuring that the application behaves dynamically and responds to user interactions.
