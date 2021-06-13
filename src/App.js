import React from "react";
import { Route } from "react-router-dom";
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from "./components/About";
import Portfolio from "./components/Portfolio";


export default function App() {
  return (
    <div>
      <Nav />
      <Route path="/"><Banner /></Route>
      <Route path="/portfolio"><Portfolio /></Route>
      <Route path="/about"><About /></Route>
    </div>
  );
}