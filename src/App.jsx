import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("aqua")

  return (
   
      <div className='w-screen h-screen absolute top-0 left-0 '
      style = {{backgroundColor:color}}
      >
        { <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>

            <button
            onClick = {()=>setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"red"}}
            >
              Red
            </button>
            
            <button
            onClick = {()=>setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"green"}}
            >
              green
            </button>

            <button
            onClick = {()=>setColor("aqua")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"aqua"}}
            >
              aqua
            </button>

            <button
            onClick = {()=>setColor("pink")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"pink"}}
            >
              pink
            </button>

            <button
            onClick = {()=>setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"blue"}}
            >
              blue
            </button>

            <button
            onClick = {()=>setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"yellow"}}
            >
              yellow
            </button>
            <button
            onClick = {()=>setColor("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"black"}}
            >
              black
            </button>
          </div>
        </div> }
          
      </div>
  )
}

export default App
