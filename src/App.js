import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import AboutUs from "./components/AboutUs";
import React, { useState } from "react";
import Alert from "./components/Alert"

function App() {

  const [alert, setAlert] = useState('');
  const showAlert = (message,type) => {
    setAlert(
      {
        message:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const  [mode, setMode] = useState("light");
  const toggleMode = () => { 
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#052c65";
      showAlert("Dark mode has been Enabled" ,"success");
      document.title = "Dark Mode - Text Generator"
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor= "white";
      showAlert("Dark mode has been Disabled" ,"success");
      document.title =" Light Mode - Text Generator"
    }
  }
  return (
    
    <>
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter text to Analyze"  mode={mode}></TextForm>
      </div>
      {/* <AboutUs></AboutUs> */}
    </>
  );
}

export default App;
