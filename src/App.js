import React, { useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { useScrollPosition } from './components/utils/CustomHooks'
import './App.scss';

import Header from './components/Header'
import Body from './components/Body'

function App() {

  let bodyElement = useRef(null)

  let [bodyInnerElement, setBodyInnerElement] = useState(null)
  let [headerShadow, setHeaderShadow] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    setHeaderShadow(currPos.y < 50)
  },
    [bodyInnerElement],
    { current: bodyInnerElement },
    false,
    50,
    bodyElement.current
  )

  return (
    <div className='doc-container'>
      <Router>

        <Header shadow={headerShadow}></Header>

        <div ref={bodyElement} className='content-body'>
          <Body setBodyInnerElement={setBodyInnerElement} />
        </div>

      </Router>
    </div>
  );
}

export default App;
