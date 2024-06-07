# React Documentation

## React Core Library

- **For web development**: React DOM
- **For app development**: React Native

## Node

- **npm** (Node Package Manager): Allows installation of libraries.
- **npx** (Node Package Executer):
  - `create-react-app`: A utility/software for creating React projects. It is a bulky utility that provides many unnecessary features.

## Creating a React Project using Basics

- Command: `npx create-react-app basic_project`

## package.json

1. **Core Libraries**: React & React DOM
2. **web-vitals**: Checks the speed of the application.
3. **Scripts**: Used for running the application
   - **start**: To run the application in the browser.
   - **build**: To convert React to HTML, CSS, and JS.
   - **test**: To run all necessary test cases.
   - **eject**: Export React project and use other frameworks on it.
4. **Linting**: Highlights cases that are not errors but are not allowed.
5. **Browser List**: Specifies the list of supported browsers (e.g., Chrome, Firefox).

## Run the Project

- `npm run start`
- `npm run build`: Creates a build folder with static, CSS, JS, and other files.
  - In production, this build folder is served to the user, not the `src` folder.

## Create React Project using Vite

1. Command: `npm create vite@latest`
   - Select all the options (name, React, JavaScript).
2. As we don't have node modules installed: `npm install`
3. Running: `npm run dev`

## package.json

- **devDependencies**: These dependencies are not included in production, just for development purposes.
