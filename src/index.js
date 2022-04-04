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
import Graph from './Components/Home/Graph'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
       <Route path="/home" element={<Home/>}  />
       <Route path="/login" element={<AuthSignIn/>}  />
       <Route path="/graph" element={<Graph/>}  />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
