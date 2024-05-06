import React, { useState, useRef } from 'react';
import { BrowserRouter as Router,Route , Routes, Link } from 'react-router-dom';
// import googleicon from './ui/googleicon.jpg';
// import image2 from './ui/image2.png';
// import logo from './ui/logo.png';
// import image4 from './ui/1.png';
import Homepage from  './screens/Homepage.js';
import Login from './screens/login'
import Signup from './screens/signup.js'
import Headbar from './screens/Headbar.js'
// import Splash from './screens/splash.js';
// import './css/style.css'
import '../css/sample.css';
import '../css/style.css'
import Splash from './screens/splash1.js';
import logo from './ui/logo.png'
import background from './ui/background.png'



function App(){
  return(
    <div className='App'>
     <Router>
      <Headbar/>
        <Routes>
          <Route path="/"  element={<Splash/>}/>
          <Route exact path="/homepage" element={<Homepage/>}/>
          <Route path="/Get-started" element={<Homepage/>}/>
          <Route path="/login"  element={<Login/>}/> 
          <Route path="/signup"  element={<Signup/>}/>   
        </Routes>  
      </Router> 
    </div>
  );
};
export default App;

    {/* <Router>
    <Headbar/>
       <Routes>
        <Route exact path="/homepage" element={<Homepage/>}/>
        <Route path="/login"  element={<Login/>}/> 
        <Route path="/signup"  element={<Signup/>}/>  
        <Route path="/splash"  element={<Splash/>}/> 
        <Route path="/Get-started" element={<Homepage/>}/>
      </Routes>  
      </Router> */}
   
