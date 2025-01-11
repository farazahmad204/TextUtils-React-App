import './App.css';
import { useState } from 'react';
// all components 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import ColorPicker from './components/ColorPicker';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";

 
function App() {
  const [mode, setmode] = useState("light");
  
  const [alert,setAlert]  = useState(null);

  const showalert=(message,type)=>
  {
    setAlert(
      {
      message: message,
      type: type
      }
     )

     setTimeout( ()=>
       {
        console.log("timeout happened");
        setAlert(null);
     },3000);
  }

  const toggleMode = () => {
    if (mode === "dark") {
       setmode("light");
       document.body.style.backgroundColor='white';
       showalert("Dark Mode is Disbaled", "success");
       document.title="TextUtils- Light Mode ";
    } 
    else {
      setmode("dark");
      document.body.style.backgroundColor='#294435';
      showalert("Dark Mode is Enabled", "success");
      document.title="TextUtils- Dark Mode ";


    }
  };


  return (
    <>
      {/* Navbar Components  */}
      <Navbar
        title="TextUtils"
        about_text="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />

      {/* Alert Components  */}
      <Alert 
      alert ={alert}
      />

      <ColorPicker showalert={showalert} />

      <div className="container my-3">
        {/* Text Form Components  */}
        <TextForm heading="Please enter a message in the textarea"   mode={mode} showalert={showalert}/>
      </div>

      <div>
        <About />
      </div>
    </>
  );
}

export default App;




