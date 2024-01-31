import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './routes/AboutPage';
import FoundationPage from './routes/FoundationPage';
import ScrollToTop from './components/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/AboutPage' element={<AboutPage/>}/>
      <Route path='/FoundationPage' element={<FoundationPage/>}/>
    </Routes>
  </HashRouter>
);

