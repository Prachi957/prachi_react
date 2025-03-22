import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// This doesn't work in react syntax.
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }


//This works
// const anotherUser = "| Welcome again!"
// const element = (
//   <a href = "https://google.com" target = "_blank">Click to Visit Google</a>
// )

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'CLICK ON ME',
  anotherUser  // Variable Injection in react 
)


createRoot(document.getElementById('root')).render(
 reactElement
)
