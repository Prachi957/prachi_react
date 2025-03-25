import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState(" ")


  const passGenerator = useCallback(() =>
    {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numAllowed == true) str += "0123456789"
      if(charAllowed == true) str += "!@#$%^&*(){}+.?"

      for (let i = 0; i < length; i++) {
        let charIndex = Math.floor(Math.random() * str.length )
        pass += str.charAt(charIndex)
      }
      setpassword(pass)

    }, [length, numAllowed, charAllowed])

  const PassRef = useRef(null);

  const CopyToClipBoard = () => {
    PassRef.current.select();
    PassRef.current?.setSelectionRange(0, 6);
    const pass = PassRef.current.value.substring(0, 6) //To extract only 6 letter password from generated password.
    window.navigator.clipboard.writeText(pass)   //To copy the password generated.
  }


  useEffect(()=>{
    passGenerator()
  }, [length, numAllowed, charAllowed])

  return (
    <div className="bg-gray-800 fixed top-2 p-6 m-auto px-4 my-8 rounded-lg shadow-lg w-100">
    <h2 className="text-white text-lg text-center my-3">Password generator</h2>
   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text" 
    value={password}
    placeholder="Password" 
    className="w-60 px-3 py-3 rounded-md bg-white text-black placeholder-black ouline-none" 
    readOnly
    ref = {PassRef}/>
    <button onClick={CopyToClipBoard} className="outline-2 text-black shrink-0 px-2 py-0.3">Copy</button>
    </div>
    <div className=' flex text-xm gap-x-2'></div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={30}
      value= {length}
      className='cursor-pointer'
      onChange={(e) => {setlength(e.target.value)}}
      />
      <label className='text-orange-500'>length : {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={numAllowed}
      id="numberInput"
      onChange={() => {setnumAllowed((prev) => !prev)}}
      />
      <label htmlFor='numberInput' className='text-orange-500'>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={charAllowed}
      id="charInput"
      onChange={() => {setcharAllowed((prev) => !prev)}}
      />
      <label htmlFor='charInput' className='text-orange-500'>Characters</label>
    </div>
    </div>
  )
}

export default App


//THIS PROJECT IS READY< YEAHHHHHH !!!