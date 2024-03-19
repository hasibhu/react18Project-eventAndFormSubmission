import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React </h1>
      <h2>My Note will be shown here</h2>


      <EventHandel></EventHandel>
      
    </>
  )
}

const EventHandel = () => {


  const handelChange = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log( e.target.value) ;
   
    console.log('Handle form input');
  }

    const handelClick = () => {
      alert("Button clicked")
    }
  
  const handleSubmission = (e) => {
      e.preventDefault();
      console.log('form Submitted');
    }
  
  return (
    <section>
      <h1>Form</h1>
      <form onSubmit={handleSubmission}>
        
        <h2 className='p-3'>Input Your Info Below</h2>
        <input className='border border-lime-300 rounded-xl text-center w-[320px]' onChange={handelChange} type="text" name='example' placeholder='Insert Your Text Here' />
        <button className='bg-green-400 mt-4' type='submit' >Submit</button> <br /> {/* for working this code onSubmit={handleSubmission} will be placed in form element  */}
        <button className='bg-green-400 mt-4' type='submit'  onClick={handleSubmission}>Click Submitt</button>
      </form>
      

      
      <button className='bg-green-400 mt-4' onClick={()=>handelClick()}>Click Me</button>
    
    </section>
  )
}
export default App