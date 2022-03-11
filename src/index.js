import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AuthSignIn from './Pages/AuthSignIn';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style/color.css';
ReactDOM.render(
  <React.StrictMode>
      <AuthSignIn/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
