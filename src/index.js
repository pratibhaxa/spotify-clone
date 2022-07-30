import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Premium from './Premium';
import HomePage from './HomePage';
import App from './App';
import Signup from './Signup';
import FormValidationExample from './FormValidationExample';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={App}/>
      <Route path='/home' component={HomePage}/>
      <Route path='/premium' component={Premium}/>
      {/* <Route path='/support' component={Support}/>
      <Route path='/download' component={Download}/> */}
      <Route path='/signup' component={Signup}/>
      {/* <Route path='/login' component={Login}/> */}
      {/* <Route path='/example' component={FormValidationExample}/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
