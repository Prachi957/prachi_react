import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, updateCounter] = useState(5)

  // let counter = 5

  const addValue = () =>{
    counter++;
    if(counter <= 20)
      {updateCounter(counter);
        console.log(counter);
        
      }
    }

    const removeValue = () => {
      counter--;
      if(counter >= 0){
        updateCounter(counter);     
        console.log(counter);
    }
  }

  return (
    <>
      <h1>Chai aur React wid Prachi</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
