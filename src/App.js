import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './components/Banner.css';
import './components/About.css';
import './components/Portfolio.css';
import './components/Contact.css';

export default function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}