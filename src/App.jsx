import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Feature from './component/Feature';
import Footer from './component/Footer';
import About from './component/About.';

function App() {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default App;
