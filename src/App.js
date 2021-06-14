import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


export default function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Banner} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}