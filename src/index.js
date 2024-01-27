import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './routes/AboutPage';
import FoundationPage from './routes/FoundationPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/AboutPage' element={<AboutPage/>}/>
    <Route path='/FoundationPage' element={<FoundationPage/>}/>
  </Routes>
  </BrowserRouter>
);

