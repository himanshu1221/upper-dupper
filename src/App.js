
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import { Route,Routes } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = 'rgba(33,37,41)';
    showAlert("Dark Mode Has Been Enabled","Success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Has Been Enabled","Success")
  }
}

  return (
    <> 
      <Navbar title="UpPPErDuPPer" about= "About Us" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element = {<><About/></>}/>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading = "Enter the text for analysing" mode={mode}/>}/>
        </Routes>
      {/* <About/> */}
    </>
  );
}

export default App;
