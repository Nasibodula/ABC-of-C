import React from 'react';
import { BrowserRouter as Router,Route , Routes, Link } from 'react-router-dom';
import logo from '../ui/logo.png';
import image4 from '../ui/1.png';
import '../css/sample.css'


function Splash(){
     return(
    <div className='splash'>
    <img src={image4} className='image4'/>    
        <div className='header'>
        <img src={"https://lottie.host/embed/10cf9053-7f4a-4fa0-81b4-7f6d4a9f7d59/hAua9HZZp7.json"}/>
            <span className='tittle'>ABC OF C</span>
        </div>
        <Link to="/login"><button>Get started</button></Link>        
    </div>
    
    );
}
export default Splash;
