// JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
// Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup.
// In this situation, you can use curly braces in your JSX to open a window to JavaScript.
// Since JSX is closer to JavaScript than to HTML,
// React DOM uses camelCase property naming convention instead of HTML attribute names.
// For example, class becomes className in JSX, and tabindex becomes tabIndex.
// Babel compiles JSX down to React.createElement() calls
// The node modules file is not necessary to be sent to someone when transferring the project
// We can simply download the node modules file by running "npm install"
// The public folder is open to all and therefore refrain entering important data in this folder

// import logo from './logo.svg'; // Isn't Being used
import "./App.css"; // Shows the connectivity of css with our app.js
import About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// let name = "Shashwat"
function App() {
  const [mode, setMode] = useState('light') // Tells us whether dark mode is enalbe or not
  const [glowText, setGlowText] = useState('Enable Glow Mode')
  const toggleGlowMode = ()=>{
    if(mode === 'light'){
        setGlowText('Enable Light Mode')
        setMode('warning')
        document.body.style.backgroundColor = '#9A7D0A'
    }
    else{
        setMode('light')
        document.body.style.backgroundColor = '#EAFAF1'
        setGlowText('Enable Glow Mode')
    }
  }
  const [sunsetText, setSunsetText] = useState('Enable Sunset Mode')
  const toggleSunsetMode = ()=>{
    if(mode === 'light'){
        setSunsetText('Enable Light Mode')
        setMode('danger')
        document.body.style.backgroundColor = '#E6B0AA'
    }
    else{
        setMode('light')
        document.body.style.backgroundColor = '#EAFAF1'
        setGlowText('Enable Glow Mode')
    }
  }
  const [darkText, setDarkText] = useState('Enable Dark Mode')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      setDarkText('Enable Light Mode')
      showAlert("Now You're in Dark Mode", "success")
      document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'Flashhhhhhh Saleeeeeeeeee'
      // }, 750);       // Helps to flash title now and then 
      // setInterval(() => {
      //   document.title = 'Buyyyyyyyyyyyyyyy Nowwwwwwwwwww'
      // }, 1250);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#EAFAF1'
      setDarkText('Enable Dark Mode')
      showAlert("Now You're in Light Mode", "success")
      document.title = 'TextUtils - Light Mode'
 
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    // Returns only one single element
    // Hence if we want to return multiple elements we can use this
    // <> THese help to create fragments that help in accessing more than 1 elemtnet in a JSX
    // <div className="blank">
    //     <h1>HEyy {name}</h1>
    // </div>
    <>
      {/* <nav className = "nav">
        <li>Home</li>
        <li>About</li>
        <li>Address</li>
      </nav>
        <div className="Container">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
           quod nostrum aspernatur rem ab. Tenetur, neque 
          doloribus. Sunt, quibusdam nihil, minimahref="#" temporibus quisquam porro
           est ipsum quo iste a sit.</p>
        </div> */}
      {/* <Navbar /> */}
      {/* <Navbar title = "Shashwat" about = "About Us"/>  */}
      
      <Router>
      <Navbar title="Shashwat" mode = {mode} toggleMode = {toggleMode} toggleSunsetMode = {toggleSunsetMode} toggleGlowMode = {toggleGlowMode} text = {darkText} sunsettext = {sunsetText} glowtext = {glowText}/>
        <Alerts alert = {alert}/>
        <div className="container">
        <Routes>
          {/* We make use of exact inorder to do complete matching as react by default does partial matching */}
          <Route exact path="/about" element={<About mode = {mode}/>}/>
          <Route exact path="/" element={<TextForm heading="Enter the data in the text area below" mode = {mode} showAlert = {showAlert}/>}/>
        {/* <TextForm heading="Enter the data in the text area below" mode = {mode} showAlert = {showAlert}/> */}
          {/* <Route path="/"> */}
        {/* <TextForm heading="Enter the data in the text area below" mode = {mode} showAlert = {showAlert}/> */}
        {/* <About /> */}
      </Routes>
       </div>
      </Router>
    </>
  );
}
export default App;
