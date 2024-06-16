// When you return an element in function then how react sees it - react creates a tree of that 
const reactElement = {
    type: 'a',  // a tag
    props: {
        href: 'google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

// function that react uses to inject the function and render the HTML Element

function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type)

    /*
    Method 1
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    */

    // Method 2 
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {

        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }


    mainContainer.appendChild(domElement)
}




// Injecting the element that we want to render inside the root
customRender(reactElement, mainContainer)