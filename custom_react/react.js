function customRender(reactElement, rootContainer){
    const DomElement = document.createElement(reactElement.type)
    DomElement.innerHTML = reactElement.children

    /*DomElement.setAttribute('href', reactElement.props.href)
    DomElement.setAttribute('target', reactElement.props.target)*/

    for (const prop in reactElement.props) {
        if (prop === 'children') 
            continue;
        DomElement.setAttribute(prop, reactElement.props[prop])
    }
    rootContainer.appendChild(DomElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const rootContainer = document.querySelector('#root')

customRender(reactElement, rootContainer)