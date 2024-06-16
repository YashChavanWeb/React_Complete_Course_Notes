react is js library
react developed by facebook in 2011
react is used to make single page application - no page reload just that portion reload

browser brings HTML CSS JS files - creates a Tree using HTML then adds css and js to it
js modifies the dom - interactivity - dom manipulation
in big projects working of dom is complicated

react has a simpler mental model
js is hard to maintain because we get errors

with react we don't need to worry about modifying the DOM react will create and update the DOM
react creates a webpage with small and reusable components
react has various pre-made things and saves a lot of time

js is imperative - define the steps to reach the destination we first change (getElement) and then also update the dom (.innerHTML)
react is declarative - define the target UI State and react figures out how to reach that state

components means breaking the page into pieces
we can also reuse components
react is the tree of components with App component as the root bringing everything together

ide - integrated development environment - Node js - server for react
cra - create react app - this is old
vite @latest - this is the latest
structure -
-- node modules
-- installed packages
-- public folder - static files that don't change
-- src - actual source code - components, assets, styles
-- package.json - contains information about the dependencies and other things of the project
--- dev dependencies - not required when deploy just required while coding

.jsx - javascript XML - combines Javascript with HTML tags
functional components - initially stateless , can use hooks useSate , useEffect, more concise
jsx gets converted to js using babel.io / repl
to use a component export it and then import it in the file
-- default export export default app
-- named export { } - export function (){}
html small case , component capital case

dynamic component - component remains same contents in it may change
to use javascript - { to_write_js_code }

reusable components:
-- components are modular - allows reuse
-- consistency
-- efficiency
-- maintainability - just maintain one single copy of variable

<center></center> - center tag moves the contents to the center
we can also create grid layout by just giving classes
<input type="date"> - we get a date selector

what - allowing grouping of multiple elements without extra DOM Nodes
why - return multiple elements without a wrapping parent
how - React.Fragment , <></>

map method

- renders lists form array data
  let fruits = [some fruits]
  in return
  {fruits.map((fruit)=> (<h1>{fruit}</h1>))}
- key prop
  - give a different key to each element so that react can differentiate which element is changed
  <h1 key={item}>{fruit}</h1>

conditional rendering

- displaying content based on certain conditions
- allow for dynamic user interfaces
  Methods
- if-else statements - choose between two blocks of contents
- ternary operators - quick way to choose between two options
- logical operators - useful for rendering content when a condition is true

let emptyMessage = array.length === 0 ? yash is hungry : null

return (
{emptyMessage} // if this is null then it is ignored
code want to display if the condition is false

)

benefits of conditional rendering

- enhance user experience
- reduces unnecessary rendering
- makes app more interactive and responsive
