Root component:

- app is the root component of the react application
- in main.jsx - get the root element from index.html and then render app component in it
- app is the starting point of the react component tree

Virtual DOM:

- react is faster than js due to this
- react creates an in-memory structure called virtual DOM
- different from the actual browser dom
- its a lightweight representation where each node stands for a component and its attributes

Actual DOM - html elements
Virtual DOM - components and their properties

Browser - when a change occurs it reloads the entire page
React - knows where the change taken place and refreshes only that component

Reconciliation process:

- When component data changes react updates the virtual dom's state to mirror these changes
- react then compares the current and previous version of the virtual dom (to find the difference)
- it identifies specific nodes that need updating
- only these required nodes are updates and hence it is efficient

Note:
virtual dom - components tree
real dom - html elements tree

React and ReactDom:
the actual updating of the dom isnt done by react itself
it is handled by a library called react dom
we use a different library here because react is a stand alone library and can make applications for android, windows,etc
so for the web development for updating the dom we use react dom library

Root Element:
The root div acts as a container for the react app
the script tag is where the react app starts executing
the component tree is rendered in the root element through main.jsx

Strict Mode component:
its use is to spot the issues in react app, does not have a visual representation

React vs Angular vs Vue
React is a library and other two are frameworks
Library - just for a specific work Eg: hammer
Framework - for a complete app work Eg: tool set

React Specialty:

- reacts role is dynamic and interactive UI
- react does not handle routing, https requests, state management etc
- we can combine anything with react so it does not have rules

Angular: developed by google
vue: it is beginner friendly as new framework
