import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Accommodation from './pages/Accommodation-cards';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='container__head'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomodation" element={<Accommodation/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
      <div className='container__bottom'>
      <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
