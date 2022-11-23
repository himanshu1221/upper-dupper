import React from 'react'
import PropTypes from 'prop-types'
import '/home/himanshu_chhatwal/Downloads/ReactJS/UpPPEr DuPPer/upper-dupper/src/App.css'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
  
  <div>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
     <img src="logo.png" alt="Logo" width="40" height="24" className="ms-2"/>
  <div className="container-fluid ">
    <Link className="navbar-brand " to="/">{props.title}</Link>
      <span className="navbar-toggler-icon "></span>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link " to="/about">{props.about}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" HTMLFor="flexSwitchCheckDefault">Enable {props.mode} mode </label>
      </div>
    </div>
  </div>
  </nav>  
    </div>
  )
}

Navbar.propTypes= {
    title: PropTypes.string,
    aboutText : PropTypes.string
}

Navbar.defaultProps = {
    title : "set title here",
    aboutText : "About text here"
};
