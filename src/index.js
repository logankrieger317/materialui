import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './components/pages/Authentication/Authentication';
import Database from './components/pages/Database/Database';
import Functions from './components/pages/Functions/Functions';
import MachineLearning from './components/pages/MachineLearning/MachineLearning';
import Storage from './components/pages/Storage/Storage';
import Hosting from './components/pages/Hosting/Hosting';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path='/authentication' element={<Authentication/>} />
    <Route path='/database' element={<Database/>} />
    <Route path='/functions' element={<Functions/>} />
    <Route path='/machinelearning' element={<MachineLearning/>} />
    <Route path='/storage' element={<Storage/>} />
    <Route path='/hosting' element={<Hosting/>} />
    
    

    
    </Routes>
  </BrowserRouter>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
