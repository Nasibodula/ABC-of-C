import React  from 'react';
import logo from '../ui/logo.png';
import image2 from '../ui/image2.png';
import image3 from '../ui/image3.png';
import '../css/sample.css';
import '../css/style.css'

function Homepage() {
  return(
    <div className='homepage'>
      <div className='container'>
        <div type="header">
          <span className='hello'>Hello </span><br/><span className='dailypop'>Daily Pop 🔥</span>
          <img src={logo} alt='logo' className='logo'/>
        </div>
        <div className='middle'>
          <div className='rectangle'/>
          <img src={image2} alt='image2 missing' className='image2'/>
          <span className='learn'>Learn</span><br/> <span className='codecrunch'>Code Crunch</span><br/>
          <span className='yourprogramming'>Your Programming adventure begins</span>
        </div>
        <div className='end'>
          <div className='rectangle2'/>
          <img src={image3} alt='image 3 missing' className='image3'/>
          <span className='ctechnews'>CTechNews</span><br/><span className='hackingourbrain'>Hacking our brain with Elon Musk's</span><br/><span>Neuralink Chip</span>
        </div>
      </div>
    </div>
  );
};
export default Homepage;