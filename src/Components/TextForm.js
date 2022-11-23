import React,{useState} from 'react'

import '/home/himanshu_chhatwal/Downloads/ReactJS/UpPPEr DuPPer/upper-dupper/src/App.css';


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper click was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Has Been Converted To Upper Case","Success")
    }

    const handleLoClick = () => {
        console.log("lower click was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text Has Been Converted To Lower Case","Success")

    }

    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }
    
    const handlecopy = () => {
        console.log("Copied !")
        var text = document.getElementById("mybox")
        text.select();
        text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Has Been Copied","Success")

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Are Removed","Success")
    }

    const Reset = () => {
        setText("")
        props.showAlert("Text Area Has Been Cleaned","Success")
    }
    const [text, setText] = useState("");
    return (
        <>
    <div>
        
    <div className="container">
        <h1 style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
        <textarea className ="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor:props.mode === 'dark'?'rgba(33,37,41)':'white',color:props.mode === 'dark'?'white':'black'}} id="mybox" rows="7"></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>CONVERT TO UPPER CASE</button>
        <button className="btn btn-primary ms-2" onClick={handleLoClick}>convert to lower case</button>
        <button className="btn btn-primary ms-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary ms-2" onClick={handlecopy}>Copy</button>
        <button className="btn btn-primary ms-2" onClick={Reset}>Reset</button>
    </div>
  </div>
  <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3>Reading Time</h3>
        <p>{0.008*text.split(" ").length}Minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
  </div>
  </>
  )
}
