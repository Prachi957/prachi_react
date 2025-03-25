import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')


  return (
    <div className="w-full h-screen "
    style = {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='flex flex-wrap bg-white justify-center gap-3 shadow-lg px-3 py-2 rounded-2xl'>

          <button onClick = {() =>{setColor('red')}} className='outline-none px-5 rounded-2xl text-white shadow-lg'
          style = {{backgroundColor: "red"}}>Red</button>

          <button onClick = {() =>{setColor('green')}} className='outline-none px-5 py-3 gap-8 rounded-2xl text-white shadow-lg'
          style = {{backgroundColor: "green"}}>Green</button>

          <button onClick = {() =>{setColor('Blue')}} className='outline-none px-5 py-3 gap-8 rounded-2xl text-white shadow-lg'
          style = {{backgroundColor: "blue"}}>Blue</button>

          <button onClick = {() =>{setColor('Pink')}} className='outline-none px-5 py-3 gap-8 rounded-2xl text-white shadow-lg'
          style = {{backgroundColor: "pink"}}>Pink</button>

          <button onClick = {() =>{setColor('yellow')}} className='outline-none px-5 py-3 gap-8 rounded-2xl text-black shadow-lg'
          style = {{backgroundColor: "yellow"}}>Yellow</button>

          <button onClick = {() =>{setColor('Black')}} className='outline-none px-5 py-3 gap-8 rounded-2xl text-white shadow-lg'
          style = {{backgroundColor: "black"}}>Black</button>

          <button onClick = {() =>{setColor('Orange')}} className='outline-none px-5 py-3 gap-8 rounded-2xl text-white shadow-lg'
          style = {{backgroundColor: "orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
