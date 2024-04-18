import React, { useState } from "react";
import { BrowserRouter as Router,Route , Routes, Link } from 'react-router-dom';
import googleicon from '../ui/googleicon.jpg';
import giticon from '../ui/git-icon.png';
import logo from '../ui/logo.png';


function Signup(){
  //  const [name,setName] = useState('')
  //  const [email,setEmail] = useState('')
  //  const [password,setPassword] = useState('')
  //  function handleSubmit(event){
  //      event.preventDefault();
  //  }
      return(
        <div className='signup'>
      <form className='abs'>
        <div className='title'>
          <img src={logo} className='abs '/>
        </div>  
          <div className='credentials abs  '>
            <input placeholder='Username'  className='s20 f-w500'/>
            <input type='email' placeholder='Email'  className='s20 f-w500'/>
            <input type='password' placeholder='Password'  className='s20 f-w500'/>
            <input type='password' placeholder='Confirm Password'  className='s20 f-w500'/>
            <button className="bordern cfff s20">Sign up</button>
          </div>
          <div className='icon rel'>
            <img src={googleicon} className='icon1 abs'/>
            <img src={giticon} className='icon2 abs'/>
          </div> 
      </form>
    </div>
      )
  }
  export default Signup; 