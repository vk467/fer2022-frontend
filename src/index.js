import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AuthSignIn from './Pages/AuthSignIn';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style/color.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Graph from './Components/Home/Graph';
import Mainpage from './Pages/Mainpage';
import Livepage from './Pages/Livepage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigate replace to="/login"/>} />
       <Route path="/home" element={<Mainpage/>}  />
       <Route path="/login" element={<AuthSignIn/>}  />
       <Route path="/graph" element={<Graph/>}  />
       <Route path="/live" element={<Livepage/>}  />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
