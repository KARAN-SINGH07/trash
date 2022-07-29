import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/index'
import reportWebVitals from './reportWebVitals';
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Login from './components/login/index'
import Home from './components/home/index'
import Registration from './components/registration/index'
// import Popper from 'popper.js';
// import $ from 'jquery';
import { BrowserRouter as Router , Routes, Route, Path } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Header/>
  //   <App />
  // </React.StrictMode>
  <Router>
  
    <Header/>
   
    
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login/>} />
{/* <Route path="/home" element={<Home/>} /> */}
<Route path="/registration" element={<Registration/>} />
</Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
