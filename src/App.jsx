// App.jsx
import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HOMEpage from './HOMEpage';
import Mess from './Mess';
import MainAll from "./MainAll";



const App = () => {
  const [info, setInfo] = useState([]);
  const [replay,setReplay]=useState([])

  const click = (text) => {
    const updatedInfo = [...info, { text }];
    setInfo(updatedInfo);
   
  };
  const clickTwo =(text)=>{
    const updateReplay=[...replay,{text}]
    setReplay(updateReplay)
    
    
  }

  return (
    <div className="all">
      <BrowserRouter>
     
      <div className="main">
            <div className="sub">
              

            <NavLink to='Mess' className='home'>Mess</NavLink>
            </div>
            <div className="sub">

            <NavLink to='/HOMEpage' className='home'>HOMEpage</NavLink>
            </div>
            </div>
           
       
        <main>
          <Routes>
           <Route path="/"     element={<MainAll/>}  />  {/*this */}
            <Route path='/Mess' element={<Mess click={click} replay={replay} info={info}  />} />
            <Route path='/HOMEpage' element={<HOMEpage info={info} clickTwo={clickTwo} replay={replay}/>} />
          </Routes>
        </main>
        
      </BrowserRouter>
    </div>
  );
};

export default App;











// import React from 'react'
// import { useState } from 'react'

// import HOMEpage from './HOMEpage'
// import Mess from './Mess'
// import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
// const App = () => {


//   const [info,setInfo]=useState([])
  
// const click= (event)=>{
// event.preventDefault();
// const updatedInfo=[...info,item]
// setInfo(updatedInfo)
// }


//   return (
//     <div>
//       <div>

//       <BrowserRouter>
//       <header>
//         <nav>
//       <NavLink to='/'>Mess</NavLink>
//       <NavLink to='HOMEpage'>HOMEpage</NavLink>
//       </nav>
//       </header>
//       <main>
//       <Routes>
//         <Route path='/' element={<Mess click={click}/>}/>
//         <Route path='HOMEpage' element={<HOMEpage info={info}/>}/>
//       </Routes>
//       </main>
//       </BrowserRouter>

//       </div>
    
    
//     </div>
//   )
// }

// export default App























