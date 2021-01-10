import React, { useState } from "react";
import logo from "../assets/cart.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";

const EmptyCart = () => {
  const history = useHistory();
  const gotohome = () => {
    history.push("/");
  };
  return (
    <section class="hero is-medium is-white is-bold is-fullheight has-text-centered">
      <div class="hero-body">
        <div class="container">
          <img src={logo} alt="cart" />
          <h1 class="title">Your Shopping Cart is empty</h1>
          <h2 class="subtitle">
            Click <i onClick={gotohome}>here</i> to continue shopping
          </h2>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
