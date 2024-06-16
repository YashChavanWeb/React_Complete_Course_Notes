# Introduction to React

## What is React?

React is a JavaScript library developed by Facebook in 2011. It is primarily used for building single-page applications (SPAs), where the entire application runs on a single web page. React enables the development of dynamic and interactive user interfaces by allowing developers to create reusable components.

## Working of DOM

When a browser loads a web page, it fetches HTML, CSS, and JavaScript files, and then creates a Document Object Model (DOM) tree from the HTML. CSS is applied to style the elements, and JavaScript can modify the DOM to make the page interactive. In large projects, DOM manipulation can become complex and challenging to manage.

## Problems with JavaScript

JavaScript can be difficult to maintain in large projects because direct DOM manipulation can lead to errors and complex code. JavaScript's imperative nature requires developers to explicitly define each step to update the UI, which can be error-prone.

## Working of React

React simplifies the development process by providing a declarative approach to UI development. Developers define the desired UI state, and React takes care of creating and updating the DOM. React applications are built using small, reusable components, making the code more manageable and efficient.

## JavaScript vs React

- **JavaScript (Imperative):** Developers define the steps to achieve a UI state, manually selecting and updating DOM elements.
- **React (Declarative):** Developers define the target UI state, and React determines the steps to reach that state, abstracting away direct DOM manipulation.

## Introduction to Components

Components are the building blocks of React applications. They allow developers to break down the UI into smaller, reusable pieces. Each component can manage its own state and props, making the application modular and easier to maintain.

# Create a React App

## IDE

An Integrated Development Environment (IDE) is essential for React development. It provides tools and features to write, test, and debug code efficiently. Popular IDEs for React development include Visual Studio Code, WebStorm, and Atom.

## Create React App

To create a React app, you can use the Create React App (CRA) tool, although Vite is a newer alternative. CRA sets up a new React project with a standard structure and configuration.

### Using Create React App

```bash
npx create-react-app my-app
cd my-app
npm start
```

### File Structure

- **node_modules:** Contains installed packages.
- **public:** Static files that don't change (e.g., `index.html`).
- **src:** Source code, including components, assets, and styles.
- **package.json:** Contains information about dependencies and project configuration.
- **devDependencies:** Packages required for development but not for deployment.

# Creating React Components

## File Extensions

React components are usually written in files with `.jsx` or `.js` extensions. JSX (JavaScript XML) allows combining JavaScript with HTML-like syntax.

## Class vs Functional Components

- **Class Components:** Stateful and can manage their own state using `this.state`. Use lifecycle methods like `componentDidMount`.
- **Functional Components:** Initially stateless but can use hooks like `useState` and `useEffect`. They are more concise and easier to read.

## What is JSX?

JSX is a syntax extension that allows writing HTML tags directly within JavaScript. It is transformed into JavaScript by tools like Babel.

## Exporting Components

To use a component in another file, you need to export it.

- **Default Export:**

  ```javascript
  export default App;
  ```

- **Named Export:**

  ```javascript
  export function MyComponent() {}
  ```

## Naming Conventions

HTML elements use lowercase tags, while React components use PascalCase (e.g., `<MyComponent />`).

## Dynamic Components

Dynamic components can change their contents based on props or state. JavaScript expressions can be used within JSX by wrapping them in curly braces `{}`.

## Reusable Components

Components should be designed to be reusable, promoting consistency, efficiency, and maintainability. Reusable components encapsulate specific functionalities that can be used across different parts of the application.

# Including Bootstrap

## Responsive

Bootstrap provides responsive design utilities, ensuring the UI works on various screen sizes and devices.

## Components

Bootstrap offers a wide range of pre-styled components like buttons, forms, and modals.

## Customizable

You can customize Bootstrap to fit the design requirements of your application.

## Open Source

Bootstrap is open source, making it freely available and supported by a large community.

## Cross Browser

Bootstrap ensures compatibility across different browsers.

## Install and Import

To use Bootstrap in a React app, install it via npm and import it into your project.

```bash
npm install bootstrap
```

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

# Fragments

## What

Fragments allow grouping multiple elements without adding extra DOM nodes.

## Why

Using fragments avoids unnecessary wrapping elements, keeping the DOM structure clean.

## How

```javascript
import React, { Fragment } from "react";

function MyComponent() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <p>World</p>
    </Fragment>
  );
}

// Shorthand
function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}
```

# Map Method

## Purpose

The `map` method is used to render lists from array data.

## JSX Elements

Example of using `map` to render JSX elements:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];

function FruitList() {
  return (
    <div>
      {fruits.map((fruit) => (
        <h1 key={fruit}>{fruit}</h1>
      ))}
    </div>
  );
}
```

## Inline Rendering

Using `map` directly within the JSX to render lists.

## Key Prop

The `key` prop helps React identify which items have changed, added, or removed, enhancing performance during re-renders.

```javascript
<h1 key={fruit}>{fruit}</h1>
```

# Conditional Rendering

## Purpose

Conditional rendering allows displaying content based on certain conditions, making the UI dynamic and interactive.

## Methods

- **If-Else Statements:**

  ```javascript
  if (condition) {
    return <ComponentA />;
  } else {
    return <ComponentB />;
  }
  ```

- **Ternary Operators:**

  ```javascript
  return condition ? <ComponentA /> : <ComponentB />;
  ```

- **Logical Operators:**

  ```javascript
  return condition && <ComponentA />;
  ```

## Benefits

- **Enhanced User Experience:** Displaying content dynamically based on user actions.
- **Reduced Unnecessary Rendering:** Only render components when necessary.
- **Increased Interactivity and Responsiveness:** React to user inputs and changes in state effectively.

---
