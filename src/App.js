import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const Category = () => (
//   <div>
//     <h2>Category</h2>
//   </div>
// );

// const Products = () => (
//   <div>
//     <h2>Products</h2>
//   </div>
// );

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Route path="/"><Banner /></Route>
      <Route path="/portfolio"><Portfolio /></Route>
      <Route path="/about"><About /></Route>
    </div>
  );
}