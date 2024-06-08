# React Alert Component

## Concepts Covered

### 1. **React Functional Components**

- Simplified use of functional components.
- Example: The `Alert` component is a functional component.

### 2. **State Management with `useState` Hook**

- Managing component state using `useState`.
- `useState` is used to manage the `alert` state.
- State is updated when an alert is shown or hidden.
- Example:
  ```javascript
  const [alert, setAlert] = useState(null);
  ```

### 3. **Conditional Rendering**

- Conditionally rendering the alert component based on state.
- The alert component only renders if there is an alert to show.
- Example:
  ```javascript
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
      </div>
    )
  );
  ```

### 4. **Event Handling**

- Handling events to show and hide alerts.
- Example: A function is called to show an alert message when the mode is toggled.
- Example:
  ```javascript
  const showAlertOn = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  ```

### 5. **Helper Functions**

- Creating helper functions for repeated tasks such as capitalizing strings.
- Example:
  ```javascript
  const capitalize = (word) => {
    const capital = word.toLowerCase();
    return capital.charAt(0).toUpperCase() + capital.slice(1);
  };
  ```

### 6. **Bootstrap Integration**

- Using Bootstrap classes for styling alerts.
- Alerts are styled dynamically based on their type (e.g., success, warning).
- Example:
  ```javascript
  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  ```

## Summary

- The `Alert` component in React is created using functional components and state management with `useState`.
- Conditional rendering ensures that alerts are only shown when necessary.
- Event handling functions manage the display of alerts, which are styled using Bootstrap.
- Helper functions like `capitalize` are used for consistent formatting of alert types.
- Alerts automatically dismiss after a short duration using `setTimeout`.
