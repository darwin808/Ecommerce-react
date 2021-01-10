import React, { useState, useEffect } from "react";
import logo404 from "./assets/err404.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";

const NotFound = () => {
  const [seconds, setSeconds] = useState(10);
  const history = useHistory();
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      history.push("/");
    }
  });

  return (
    <section class="hero has-background-danger is-fullheight">
      <div class="hero-body is-primary">
        <div class="container has-text-centered">
          {" "}
          <img src={logo404} alt="404" />
          <h1 className="subtitle has-text-centered">
            Redirecting to Home in {seconds} seconds.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
