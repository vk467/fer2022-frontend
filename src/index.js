import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AuthSignIn from './Pages/AuthSignIn';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style/color.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
       <Route path="/home" element={<Home/>}  />
       <Route path="/login" element={<AuthSignIn/>}  />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
