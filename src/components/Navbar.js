// Type rfc for the basic template 
import React from 'react'
import PropTypes from 'prop-types' // Helps in defining a type for our prop
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/about">{props.about}</Link>
      </div>
    </div>
    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`} style = {{padding:'0px 30px'}}>
  <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
</div>
<div className={`form-check form-switch text-${props.mode ==='light' ? 'dark':'light'}`} style = {{padding:'0px 30px'}}>
  <input className="form-check-input"  onClick = {props.toggleGlowMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.glowtext}</label>
</div>
<div className={`form-check form-switch text-${props.mode ==='light' ? 'dark':'light'}`} style = {{padding:'0px 30px'}}>
  <input className="form-check-input"  onClick = {props.toggleSunsetMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.sunsettext}</label>
</div>
  </div>
</nav>
  )
}

// Basically PROPS are nothing but values that are passed to the components 
// Proptypes basically tell us the type of each prop so that values other than that are hnot accepted
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string
}
// If no default value is given then we can take the by default provided value
Navbar.defaultProps = {
    title : "Textutils",
    about : "About Us"
}
