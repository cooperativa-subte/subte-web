import React, { useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.scss';

import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

import { useScrollPosition } from './components/utils/useScrollPosition'

export const AppContext = React.createContext({
  bodyElement: null
});

function App() {

  let bodyElement = useRef(null)

  let [bodyInnerElement, setBodyInnerElement] = useState(null)
  let [headerShadow, setHeaderShadow] = useState(false)

  useScrollPosition( ({prevPos, currPos}) => {

    setHeaderShadow(currPos.y < 65)
  },
  [bodyInnerElement],
  {current: bodyInnerElement},
  false,
  50,
  bodyElement.current
  )

  return (
    <div className='doc-container'>
      <AppContext.Provider value={{bodyElement}}>
        <Router>

          <Header shadow={headerShadow}></Header>

          <div ref={bodyElement} className='content-body'>
            <Body setBodyInnerElement={ setBodyInnerElement } />
          </div>

          <Footer></Footer>

        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
