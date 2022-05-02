import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work, Budget } from './containers';
import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Budget />
        <Footer />
    </div>
  )
}

export default App