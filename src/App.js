import React from "react";
import Homepage from './Homepage';
import AboutLittleLemone from './AboutLittleLemone';
import Contact from './Contact';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";

function App(){
  return (
    <BrowserRouter>
      <nav>
        <Link to='/' className='nav-item'>Homepage  </Link>
        <Link to='/about' className='nav-item'>About Little Lemone  </Link> 
        <Link to='/contact' className='nav-item'>Contact</Link> 
      </nav>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/about' element={<AboutLittleLemone />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </BrowserRouter>

  )
}

export default App;
