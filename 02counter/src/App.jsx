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
    //Interview question-

    // const addValue = () => {
      updateCounter(counter+1)
      updateCounter(counter+1)
      updateCounter(counter+1)
      updateCounter(counter+1)
      // This code will not increment counter four times but only time as useState() make a bunch of these statements and send them as a batch because all are doing the same work.

      //But if we want to increment counter like this there's a method, by passing a callback function to updateCounter.
      updateCounter(prevcounter => prevcounter + 1)
      updateCounter(prevcounter => prevcounter + 1)
      updateCounter(prevcounter => prevcounter + 1)
      updateCounter(prevcounter => prevcounter + 1)
      //Now counter will be incremented by four on a single click.
    // }

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
