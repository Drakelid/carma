import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Market from './components/Market';
import Business from './components/Business';
import Traction from './components/Traction';
import Environment from './components/Environment';
import Funding from './components/Funding';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Market />
      <Business />
      <Traction />
      <Funding />
      <Environment />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;