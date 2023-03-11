import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../../Images/logoIcon/IITR175.png'

function Header() {
  const [display, setDisplay] = useState('Sign Up');
  const [route, setRoute] = useState('signup');
  

  function clickHandler (){
   if(display === 'Sign Up'){
    setRoute('login')
    setDisplay('Log In')
   }else{
    setDisplay('Sign Up')
    setRoute('signup')
   }
  }


  useEffect((e) => {
    if(e && e.preventDefault()){
      clickHandler(e)
      console.log("its running again")
    }
  },[route,display])


  return (
  
    <div className='header container-fluid'>
  
        <div className='innerContainer container d-flex justify-content-around '>
            <div className='header__image'>
              <img src={logo} alt="Evangadi logo" />
            </div>
            <button className='ic d-sm-block d-md-none'>
               ☰
            </button>
            <div className='d-flex  innerContainer2 justify-content-between d-none d-md-block'>
              <a href="/">Home</a>
              <a href="https://www.evangadi.com/explained/">IITR Portal</a>
              <a href="https://www.evangadi.com/explained/">IR Portal</a>
              <a href="../../Resources/howToUse.pdf">How It Works</a>
              <a to ={`/${route}`} onClick={(e)=>clickHandler(e)} className='loginHeader'>{display}</a>
            </div>
        </div>
    </div>
  )
}

export default Header