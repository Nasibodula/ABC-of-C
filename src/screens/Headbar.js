import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/sample.css';
import '../css/style.css'

function Headbar() {
  const [nav, setnav] = useState([
    { label: 'Home', slug: '/homepage' },
    { label: 'Courses', slug: '/Courses' },
    { label: 'Log in', slug: '/login' },
    { label: 'Sign Up', slug: '/signup' },
    { label: 'Log out', slug: '/splash' },
    { label: 'Search', slug: '/Search', icon: '#' },
  ]);      

  var navigation = [];
  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li className='headerlist' key={i}>
        <Link to={nav[i].slug} className='link'>
          <div className='headers' />
          <p className='navbar'>{nav[i].label}</p>
        </Link>
      </li>
    );
  }

  return (
    <div className='headbar'>
      <a href='#'>
        <span className='title'>Abc of C</span>
        {/* <img src={logo} className='logo' alt='logo missing' /> */}
        <ul className='ul'>{navigation}</ul>
      </a>
    </div>
  );
}

export default Headbar;
