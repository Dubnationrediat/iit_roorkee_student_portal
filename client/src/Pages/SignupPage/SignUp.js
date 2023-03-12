import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dotenv from 'dotenv';
import "./SignUp.css";
//* to import icons
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Ethiopia from '../../Images/countryFlags/Ethiopia_flag.png'

dotenv.config({
  path:"../../../.env"
})
console.log(process.env.REACT_APP_PORT1);

//* initializing dotenv
let server = `http://localhost:6500`;
let url = `${server}/user/register`;

const SignUp = () => { 
  const [response, setresponse] = useState();  
  //* for confirm password not pasting
  const [password, setPassword] = useState('');
  // **********icon part *********
  const [type, setType] = useState("password");
  //* to change type attribute from 'password' to 'text' and vice versa
  const [icon, setIcon] = useState(eyeOff);
  const [userData, setUserData] = useState({
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_password: "",
    user_Indian_number:"",
    user_whatsapp_number:"",
    user_nationality:"",
    Confirm_Password:""
  });

  // to change the icon when clicked
  const HandleIconChange = () => {
    // event listen for Password function
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

//* for confirmation of password not to be pasted 
  const handlePaste = (event) => {
    event.preventDefault();
    setPassword('');
  };

  const formSubmitter = (e) => {
    e.preventDefault();
    if(userData.user_password === userData.Confirm_Password){
      let userFile = {
        user_first_name :userData.user_first_name,
        user_last_name:userData.user_last_name,
        user_email:userData.user_email,
        user_password:userData.user_password,
        user_Indian_number:userData.user_Indian_number,
        user_whatsapp_number : userData.user_whatsapp_number,
        user_nationality : userData.user_nationality
      }
      axios({
        method: "post",
        url,
        data: userFile,
      })
        .then((data) => {
          setresponse(data.data);
        
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
      setresponse(
      {successMessage:"Passwords Doesn't Match",
        redirect : "/signup"
      }
        )
    }
  };

  // ******************************
  let handleChange = (e) => {
    switch (e.target.name) {
      case "user_last_name":
        setUserData((pre) => {
          return { ...pre, user_last_name: e.target.value };
        });
        break;
      case "user_first_name":
        setUserData((pre) => {
          return { ...pre, user_first_name: e.target.value };
        });
        break;
      case "user_email":
        setUserData((pre) => {
          return { ...pre, user_email: e.target.value };
        });
        break;
      case "user_nationality":
        setUserData((pre) => {
          return { ...pre, user_nationality: e.target.value };
        });
        break;
      case "user_whatsapp_number":
        setUserData((pre) => {
          return { ...pre, user_whatsapp_number: e.target.value };
        });
        break;
      case "user_Indian_number":
        setUserData((pre) => {
          return { ...pre, user_Indian_number: e.target.value };
        });
        break;
      case "user_password":
        setUserData((pre) => {
          return { ...pre,
             user_password: e.target.value };
        });
        break;
      case "Confirm_Password":
        setUserData((pre) => {
          return { ...pre,
            Confirm_Password: e.target.value };
        });
        break;
      default:
        break;
    }
  };
  // ****************************
  if (response) {
    return (
      <div className="forSuccessPage">
        <h1 className="thankYou">{response.successMessage}</h1>
        <a className="thankYouAnch" href={`${response.redirect}`}>
          Click Here To Go Back To Registration Page
        </a>
      </div>
    );
  } else {
    return (
      <div className="container-fluid sign_page">
        <div className="container d-md-flex mx-auto py-5 align-items-center">
          <div className="form_wrapper col-12 col-md-6 me-md-2 p-5 d-flex flex-column">
            <p className="p11">IITR Ethiopian Students Union</p>
            <p className="p22 lorem">
              Already have an account?
              <Link to="/login" className="a11">
                Sign in
              </Link>
            </p>
            <form onSubmit={formSubmitter}>
              <div className="FLname d-flex">
                <input
                required
                  className="in11 me-1"
                  autoComplete="new-password"
                  name="user_first_name"
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                />
                <input
                required
                  className="in11 ms-1"
                  name="user_last_name"
                  onChange={handleChange}
                  type="text"
                  autoComplete="new-password"
                  placeholder="Last Name"
                />
              </div>
              <input
              required
                className="in11 mr-1"
                name="user_email"
                autoComplete="new-password"
                onChange={handleChange}
                type="email"
                placeholder="Email"
              />
              <input
              required
                className="in11"
                onChange={handleChange}
                name="user_whatsapp_number"
                autoComplete="new-password"
                type="tel"
                placeholder="Insert Whatsapp Number start by +251...."
              />
              <input
              required
                className="in11"
                onChange={handleChange}
                name="user_Indian_number"
                autoComplete="new-password"
                type="tel"
                placeholder="Insert Indian Number start by +91..."
              />
              <input
              required
                className="in11"
                onChange={handleChange}
                name="user_nationality"
                autoComplete="new-password"
                type="text"
                placeholder="Nationality"
              />
              <input
              required
                className="in11"
                onChange={handleChange}
                name="user_password"
                autoComplete="new-password"
                type={type}
                placeholder="Password"
              />
            
              <span className="showHide ">
                <Icon icon={icon} size={20} onClick={HandleIconChange} />
              </span>

              <input
              required
                className="in11 mt-4"
                onChange={handleChange}
                name="Confirm_Password"
                autoComplete="new-password"
                type="password"
                onPaste={handlePaste}
                placeholder="Confirm Password"
              />
             
              <button className="btnSign">Agree and Join</button>
            </form>
            <p className="mt-md-5 mt-sm-5 text-center texttag">
              I agree to the
              <Link to="" className="a22">
                privacy policy
              </Link>
              and
              <Link to="" className="a22">
                terms of serivice.
              </Link>
            </p>
            <Link to="/login" className="a33 text-center">
              Already have an account?
            </Link>
          </div>
          <div className="SignupNote container col-12 col-md-6 ms-md-2  mt-sm-5">
            <p className="forTitle">David Rocastle Once Said:</p>
            <h1>Remember Who You Are, What you Are and Who you Represent! </h1>
            <img  src={Ethiopia} alt="" />
            {/* <button className="btn1">HOW IT WORKS</button> */}
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
