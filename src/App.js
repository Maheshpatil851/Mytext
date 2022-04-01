
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import Alert from './Components/Alert';
import About from './Components/About';
import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';




function App() {
  const [mode, setmode] = useState('light')
  const [alert, SetAlert] = useState(null)

  const ShowAlert = (msg, type) => {
    SetAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      SetAlert(null);

    }, 1000);

  }
  const togglemode = (cls) => {
    // document.body.addClasslist
    
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey'
      ShowAlert("Dark mode has been enabled", 'success')
      document.title = 'textmodify-Dark mode'
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      ShowAlert("light mode has been enabled", 'success')
    }
  }
  const removeclass =()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-info')

  }
  const togglemode2 = (cls) => {
    removeclass();
    console.log(cls)
    document.body.classList.add('bg-'+cls);
    document.body.style.backgroundColor = '#4638bf'
    ShowAlert("bluish mode has been enabled", 'success')
  }


  return (
    <>
      <Router>
      <Navbar title='navbar' aboutText='about' mode={mode} togglemode={togglemode} togglemode2={togglemode2} />
      <Alert alert={alert} />
      {/* <Navbar />  */}
      <div className="container">
        <switch>
        <Route path='/'>
        <TextForms ShowAlert={ShowAlert} heading='Enter the custmize text below' mode={mode} />
        </Route>
        <hr mx-5='true' style={{color:'black'}}/>
        <Route path='About.js'>
        <About mode={mode}  />
        </Route>
        </switch>
      </div>
      </Router>




    </>
  );
}

export default App;
