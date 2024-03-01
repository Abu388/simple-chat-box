import './HOMEpage.css';
import React, { useState } from 'react'


const HOMEpage = ({info,clickTwo,replay}) => {
  const [second,setSecond]=useState("")
  const personReplay =(e)=>{
    setSecond(e.target.value)
  }
const handleInput=()=>{
  clickTwo(second)
  setSecond("")
}
  return (
    <div>
      <input type="text"
      className='input'
      placeholder='message...'
      value={second}
     
      onChange={personReplay}
       />
     <button onClick={handleInput} className='button'>send</button>

    
        {info.map((ne,index)=>(
            <div key={index} className='send'> 
            <h1>{ne.text} </h1>
            </div>
        ))}
      
        
        {
          replay.map((ne,index)=>(
            <div key={index} className='origin'> 
            <h1>{ne.text} </h1>
            </div>))
        }
    
     
    </div>
  )
}

export default HOMEpage






