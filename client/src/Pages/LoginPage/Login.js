import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import './Login.css'
// to import icons 
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import Ethiopia from '../../Images/countryFlags/Ethiopia_flag.png'

const Login = () => {
  const [type, setType] = useState("password");
  // to change type attribute from 'password' to 'text' and vice versa
  const [icon, setIcon] = useState(eyeOff);

  // to change the icon when clicked
  const HandleIconChange = () => {
    // event listenforPassworder function
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  let userSet =(e)=>{
    e.preventDefault();
 
  }

  return (
    <div className="container-fluid login_page">
      <div className="container py-5 d-md-flex justify-content-between login_container">
        <div className="main col-12 col-md-6 me-md-2 p-5 d-flex flex-column justify-content-center">
      
          <p className="p1">IITR Ethiopian Students Union</p>
          <p className="p2 text-center">
            Don't have an account?<Link to='/signup' className="a3"> Create a new account</Link>
          </p>
          <form onSubmit={(e)=>userSet(e)} >
            <input className="in1" type="email" name="email"  placeholder="Your Email" required autoComplete="new-password" />
           
            <input className="in1" type={type} name="password"  placeholder="Your Password" required autoComplete="new-password" />
            <span  className="showHide2">
              <Icon icon={icon} size={20} onClick={HandleIconChange} />
            </span>
            <button className="btn1">submit</button>
          </form>
          <Link to='/signup' className="a3 a1">
            Create an account?
          </Link>
        </div>
        <div className="sideNote2 container col-12 col-md-6 ms-md-2  mt-sm-5">
          <p className="forTitle">David Rocastle Once Said:</p>
          <h1>Remember Who You Are, What you Are and Who you Represent!</h1>
           <img  src={Ethiopia} alt="" />
        </div>

       
      </div>

    </div>

  );
};

export default Login;