import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import BodyPage from "./BodyPage";
import Foobar from "./Foobar";
import Cart from "./Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";
import Products from "./components/Products";

const Home = () => {
  return (
    <div className="Home-container">
      <Navbar />
      <BodyPage />
      <Foobar />
    </div>
  );
};

export default Home;
