import React, { useState } from 'react';
import './Emailandpass.css';

import userIcon from '../Assets/person.png';
import emailIcon from '../Assets/email.png';
import passIcon from '../Assets/pass.png';

export const Emailandpass = () => {
  
    const [action, setAction] = useState("Log in");
    
  return (
    <div className='container'>
      <div className="Header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={userIcon} alt=""/>
          <input type="text" placeholder='Name:'/>
        </div> }
        
        <div className="input">
          <img src={emailIcon} alt=""/>
          <input type="email" placeholder='Email:'/>
        </div>  
        <div className="input">
          <img src={passIcon} alt=""/>
          <input type="password" placeholder='Password:'/>
        </div>  
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default Emailandpass;
