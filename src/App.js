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
  useLocation,
} from "react-router-dom";
import Products from "./components/Products";
import Home from "./Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./NotFound";
import { AnimatePresence } from "framer-motion";
import UserProfile from "./UserProfile";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/user" exact component={UserProfile} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
};

export default App;
