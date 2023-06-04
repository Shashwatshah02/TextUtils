import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("On change was clicked")
    setText(event.target.value); // We need to write this inorder to write in the textarea
  };
  const handleUpClick = () => {
    // console.log("Uppercase was clicked")
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted your text to Upper Case!", 'success')
 
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked")
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted your text to Lower Case!", 'success')
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked")
    let clearText = "";
    setText(clearText);
    props.showAlert("Cleared the content in the text area!", 'success')
 
  };
  const handleFindClick = () => {
    // console.log("Uppercase was clicked")
    let x = prompt("Enter the index to find character at given position");
    let findText = text.charAt(Number.parseInt(x));
    alert("The Character at Index " + x + " is : " + findText);
    props.showAlert("Found the required text at particular index", 'success')
 
  };
  const handleReverseClick = () => {
    // console.log("Uppercase was clicked")
    let reverseText = text.split("").reverse().join("");
    setText(reverseText);
    props.showAlert("Converted your text to reverse string", 'success')
 
  };
  const [text, setText] = useState("");
  // text = "gfks" // Gives error as states can only be updated using a function
  // setText("SHahswat"); // Gives no error
  return (
    <>
      <div>
        <div className="mb-3">
          <h1 style = {{color: props.mode==='light'?'#042743':'#EAFAF1'}} >{props.heading}</h1>
          {/* <label HTMLfor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            style = {{backgroundColor: props.mode==='light'?'#fff':'#BFC9CA', color: props.mode==='light'?'#042743':'#EAFAF1'}} 
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="14"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
        disabled={text.length === 0}
          type="button"
          className="btn mx-1 btn-secondary my-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
        disabled={text.length === 0}
          type="button"
          className="btn mx-1 btn-success my-2"
          onClick={handleFindClick}
        >
          Find Character
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn mx-1 btn-danger my-2"
          onClick={handleReverseClick}
        >
          Reverse a String
        </button>
        {/* <button type="button" className="btn mx-1 btn-warning" onClick={handleCopyClick}>Copy the text</button> */}
        <button
          type="button"
          disabled={text.length === 0}
          className="btn mx-1 btn-info my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        {/* <button type="button" class="btn btn-light">Light</button> */}
        {/* <button type="button" class="btn btn-dark">Dark</button> */}
      </div>
      <div className="container" style = {{color : props.mode==='light'?'#042743':'#EAFAF1'}}>
        <h3>
          Text summary includes {text.length} characters and{" "}
          {text.split(/\s+/).filter((word)=>{return word.length !== 0}).length} words.
        </h3>
        <br />
        <h3>Preview</h3>
        <p>{text.length > 0?text:"Enter Text in the Above Text Area Inorder to display it Here."}</p>
      </div>
    </>
  );
}
