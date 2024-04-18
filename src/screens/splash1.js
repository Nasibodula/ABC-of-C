import React from 'react';
import logo from '../ui/logo.png'
import background from '../ui/1.png'
import '../css/props.css'
import '../css/app.css'
import { Link } from 'react-router-dom';


function Splash(){
    return (
        <div className='splash rel'>
                <Link to='/login'><img src={background} className='background bl'/></Link>
                <div className='section1'>
                    <img src={logo} className='logo abs'/>
                    <h2 className='title s42 abs f-w700'>ABC OF C</h2>
                </div>
        </div>
    )
}
export default Splash;
