import React from 'react';
import NavBar from '../../components/NavBar/index';
import HomePage from '../../components/HomePage/index.js';
import About from '../../components/About/index.js';
import Contact from '../../components/Contact/index.js';

const HomeScreen = () => {
  return (
    <div>
    <NavBar />
    <HomePage />
    <About />
    <Contact />
    </div>
  )
}

export default HomeScreen