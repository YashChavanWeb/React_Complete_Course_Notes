# Injecting JavaScript in HTML

- It is necessary to inject JavaScript into HTML.
- Without this, only JavaScript will run and not manipulate HTML.

## Public Folder

- **manifest.json**: Used for mobile web applications. Contains meta tags for that from this file.
- **index.html**: The only file where everything will load and only this file will load.
  - There is no JavaScript injected in this `index.html` file.
- This setup creates a single page application.

## Note

- **React library**: Takes all the references.
- **React DOM**: Implementation of React on the web.
- **DOM**: A tree structure of the browser.

## src Folder

- The main entry point is `index.js` or `main.js` or any name you can give.

  - React creates its own DOM (Virtual DOM) and then compares it with the main web DOM, making the required changes accordingly in the elements.
  - Take the reference of the root `div` from `index.html` and store it in a variable.
  - Now take the reference of the root and render the `App` tag.
  - **JSX**: Allows rendering HTML elements using JavaScript, enabling the creation of custom tags.

- **What is App?**

  - `App` is just a function that returns HTML code.

- **How does index.js load automatically?**
  - We have not embedded any JavaScript in `index.js`. The scripts do the work of loading the `index.js` into the `index.html`.

# Vite Project

## How does main.jsx inject in index.html?

- In `package.json`, we don't have scripts. So how is `main.jsx` getting into `index.html` and telling it to load the App?
- In Vite, a script tag is embedded in `index.html` where we give the `src` path of the `main.jsx`.

## Important Notes

- We only create `.jsx` files in Vite projects.
- JSX should be wrapped in enclosing tags, or else we can export only one element.
- We return a fragment and then inside that return multiple elements.
- The functions that we export by creating a file are components.
- The function name should start with a capital letter to import and use the component properly.
