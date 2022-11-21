
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import Alert from './Components/Alert';
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
<TextForm showAlert={showAlert} heading = "Enter the text for analysing" mode={mode}/>

    </>
  );
}

export default App;
