import React from 'react'
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import About from './components/aboutUs/About';
import Service from './components/serviceSec/Service';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
