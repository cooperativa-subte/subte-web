import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.scss';

import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

export const AppContext = React.createContext({
  bodyElement: null
});

function App() {

  let bodyElement = useRef(null)

  return (
    <div className='doc-container'>
      <AppContext.Provider value={{bodyElement}}>
        <Router>

          <Header></Header>

          <div ref={bodyElement} className='content-body'>
            <Body />
          </div>

          <Footer></Footer>

        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
