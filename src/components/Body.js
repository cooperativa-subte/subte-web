import React, { useRef, useEffect } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from './sections/Home';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './Footer';
import Admin from './Admin';
import NotFound from './NotFound';
import Nosotres from './sections/Nosotres';
import Conversatorios from './sections/Conversatorios';

import ProjectDetail from './sections/ProjectDetail';

import '../styles/Body.scss';

export default function Body({ setBodyInnerElement }) {
  let bodyContainer = useRef(null);
  let location = useLocation();

  useEffect(() => {
    setBodyInnerElement(bodyContainer.current);
  }, [bodyContainer, setBodyInnerElement]);

  return (
    <div className="body-container" ref={bodyContainer}>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={1000}
          onExit={(ele) => {
            ele.style.display = 'none';
          }}
          onExited={(ele) => {
            ele.style.display = 'block';
          }}
        >
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotres" component={Nosotres} />
            <Route exact path="/servicios" component={Services} />
            <Route exact path="/proyectos" component={Projects} />
            <Route path="/proyectos/:id" children={<ProjectDetail />} />
            <Route path="/conversatorios" component={Conversatorios} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/admin" component={Admin} />
            <Route path="*" component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}
