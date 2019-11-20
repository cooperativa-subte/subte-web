import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.scss';

import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

function App() {

  return (
    <div className='doc-container'>
      <Router>

        <Header></Header>

        <div className='content-body'>
          <Body />
        </div>

        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
