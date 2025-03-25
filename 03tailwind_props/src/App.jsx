import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userName : "Prachi"
  }
  let myArr = ["Prachi", "Shruti"]

  return (
    <>
      <h1 className='bg-green-600 text-black p-5 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="ReactCode" /*Obj = {myObj} Arr = {myArr}*//>
      <Card username="Prachi"/>
    </>
  )
}

export default App
