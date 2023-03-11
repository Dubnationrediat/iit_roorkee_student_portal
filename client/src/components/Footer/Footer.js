import React from 'react'
import logo from '../../Images/logoIcon/logo.png'
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/feather/facebook";
import { instagram } from "react-icons-kit/feather/instagram";
import { youtube } from "react-icons-kit/feather/youtube";
import { linkedin } from "react-icons-kit/feather/linkedin";
import './Footer.css'
function Footer() {
  return (
    <footer className="footer-wrapper d-md-flex justify-content-around">
    <div className="logo-icon-wrapper">
      <div className="logo">
        <img src={logo} alt = "logo"/>
      </div>
      <div className="Icon">
        <a href="https://www.facebook.com/IITRoorkee.ICC">
          <Icon icon={facebook} size={25} />
        </a>
     
        <a href="https://www.instagram.com/iitroorkee/?hl=en">
          <Icon icon={instagram} size={25} />
        </a>
        <a href="https://www.youtube.com/@IITRoorkeeOfficialChannel">
          <Icon icon={youtube} size={25} />
        </a>
        <a href="https://www.linkedin.com/school/indian-institute-of-technology-roorkee/">
          <Icon icon={linkedin} size={25} />
        </a>
      </div>
    </div>
    <div className="row">
    <h3 className="titlee"> Useful Link</h3>
      <div className="Useful-Link ">
        <a href="https://iitr.ac.in/Departments/index.html">Departments</a>
        <a href="https://ir.iitr.ac.in/">International Students</a>
        <a href="http://ghbooking.iitr.ac.in/">Book Guest house</a>
        <a href="https://www.evangadi.com/legal/privacy/">Support @ IITR</a>
      </div>
    </div>
    <div className="row">
      <div className="Contact-Info">
        <h3 className="titlee"> Contact Info</h3>
        <p>registrar@iitr.ac.in</p>
        <p>+91-1332-285311</p>
      </div>
    </div>
</footer>
  )
}

export default Footer