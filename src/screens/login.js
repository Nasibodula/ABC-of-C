import React, { useRef ,useState} from 'react';
import { BrowserRouter as Router,Route , Routes, Link } from 'react-router-dom';
import logo from '../ui/logo.png';
import googleicon from '../ui/googleicon.jpg';
import giticon from '../ui/git-icon.png';

function Login(){
  // const [email, setEmail]= useState('')
  // const [password, setPassword]= useState('')
  // function handleSubmit(event){
  //   event.preventDefault();
  // }
// const [credentials, setcredentials]= useState([
//   {label:'username'},
//   {label:'email'},
//   {label:'password'},
//   {label:'confirm-password'}

// ])
// var place=[];
// for(let i=0; 1<credentials.length; i++){
//   place.push(
//     <div>
//       <img src={credentials[i].label}/>
//     </div>
//   )
// }

  return(
    <div className='login '>
      <form className='abs'>
        <div className='title'>
          <img src={logo} className='abs '/>
        </div>  
          <div className='credentials abs s20'>
            <input type='email' placeholder='Email' className='s20 f-w500 placeholder'/>
            <input type='password' placeholder='Password' className='s20 f-w500'/>
            <div className='s18 cfff'>Don’t have an account? <Link to='/signup'><a href='#' className='link '>Sign up </a></Link></div>
            <button className='bordern cfff s20'>Login</button>
          </div> 
          <div className='icon rel'>
            <img src={googleicon} className='icon1 abs'/>
            <img src={giticon} className='icon2 abs'/>

          </div>
      </form>
    </div>

    // <div className='container'>
    //   <div className='login'>
    //     <form onSubmit={handleSubmit}>
    //     <div className='title'><img src={logo}/></div>
    //     <div className="credentials">  
          
    //       <div className='email'>
   //         <input   type="email"  placeholder='Email'
    //         onChange={e=> setEmail(e.target.value)} required/>
    //       </div> 
    //       <div className='passsword'>
    //         <input type='password' placeholder='Password'  
    //         onChange={e=> setPassword(e.target.value)} required/>
    //       </div> 
    //       <div className='forgot-password'><a href="#" className='link'>Forgot Password?</a></div>
    //       <button className='submit, link'>Login</button>
    //       <div className='sign-up' >Don’t have an account? to="/signup" className='link'<a href="#" className='link'>Sign Up</a></div>
    //       </div>
    //     </form>
    //     </div>
    //     </div>
  );
};
export default Login;