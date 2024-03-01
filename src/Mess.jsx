// Mess.jsx
import './Mess.css'
import React, { useState } from 'react';

const Mess = ({ click ,replay,info}) => {
  const [person, setPerson] = useState('');
  


  const personInput = (event) => {
    setPerson(event.target.value);
  };
  const handleInput =()=>{
    click(person)
    setPerson("")
                    }

  return (
    <div >
      <input
      className='input'
        type='text'
        placeholder='Enter a message...'
        value={person}
        onChange={personInput}

      />
      
      <button onClick={handleInput } className='button'>send</button>
     
      {replay.map((item,index)=>(
        <div key={index} className='send'>
            <h1>{item.text}</h1>
        </div>
     ))}
    
      
      {info.map((item,index)=>(
         <div key={index} className='origin'>
         <h1>{item.text}</h1>
     </div>
      ))}
      

     

    </div>
  );
};

export default Mess;


















// import React from 'react'
// import { useState } from 'react'

// const Mess = ({click}) => {
  
//         const [person,setPerson]=useState("")
       
// const personInput =(event)=>{
//   setPerson(event.target.value)
 
// }




//   return (
//     <div>
//       <div>

     

//       </div>
//       <input type="text" 
//       placeholder='message is nothing ...'
//       value={person}
//       onChange={personInput}/>

//       <button onClick={()=>click(person)}>   + </button>
    
        
    
//     </div>
//   )

// }

// export default Mess