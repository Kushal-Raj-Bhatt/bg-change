import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'

function App() {
  const [color, setcolor] = useState("skyblue")

  return (
    <>
      <div className='w-100 h-screen duration-500' style={{backgroundColor: color}}>
      <div className='bg-white rounded-3xl shadow-2xl fixed bottom-11 px-3 py-8 md:py-2 inset-x-2'>
        <div className='flex flex-wrap justify-center gap-3'>
          <button onClick={() => setcolor("red")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setcolor("Green")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={() => setcolor("Black")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"Black"}}>Black</button>
          <button onClick={() => setcolor("Blue")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={() => setcolor("Yellow")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button onClick={() => setcolor("Pink")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"Pink"}}>Pink</button>
          <button onClick={() => setcolor("Violet")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"Violet"}}>Violet</button>
          <button onClick={() => setcolor("Gold")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"gold"}}>Gold</button>
          <button onClick={() => setcolor("Teal")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"Teal"}}>Teal</button>
          <button onClick={() => setcolor("Orange")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"Orange"}}>Orange</button>
          <button onClick={() => setcolor("Magenta")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"Magenta"}}>Magenta</button>
          <button onClick={() => setcolor("Cyan")} className='py-2 px-6 outline-none border-none rounded-full text-white' style={{backgroundColor:"Cyan"}}>Cyan</button>
        </div>
      </div>
    </div>
      {/* <div className='grid gap-5 justify-center'>
        <div className='grid gap-5 justify-center grid-cols-4'>
          <Cards name="Kushal Raj Bhatt" btnType="Go Go" desicrition="hohohohohohohohoho" />
          <Cards name="Kapil Tiwari" btnType="Go Mo" desicrition="lololololololololololololololo" />
          <Cards name="Vaibhav Saxsena" btnType="Go So" desicrition="lululululululu" />
          <Cards name="Lovekesh Sharma" btnType="Go Ko" desicrition="hayahohayho" />
        </div>
      </div> */}
    </>
  )
}

export default App
