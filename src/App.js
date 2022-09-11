
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode is enabled", "success");
    } else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
    }
  }


  return (
    <>
      {/* <Router> */}
      <Navbar title="Ankit" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">

        {/* <Routes> */}
        {/* <Route exact path="/about" element={  <About />}> */}

        {/* </Route> */}

        {/* <Route exact path="/" element= {  <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />}> */}

        {/* </Route> */}
        {/* </Routes> */}
        <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
      </div>
      {/* </Router> */}




    </>
  );
}
export default App;
