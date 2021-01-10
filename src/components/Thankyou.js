import React, { useState, useEffect } from "react";
import logo from "../assets/check.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";

const Thankyou = (props) => {
  const [seconds, setSeconds] = useState(props.timer);
  const history = useHistory();
  // const toggleThanks = props.togglethanks;
  const x = props.timer;

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
      console.log("seconds: " + seconds);
      console.log("prop: " + props.timer);
      console.log("thanks: " + props.toggleThanks);
    } else {
      history.push("/");
    }
  });

  const gotohome = () => {
    history.push("/");
  };
  return (
    <div>
      <div className={`modal ${props.toggleThanks}`}>
        <div className="modal-background"></div>
        <div className="modal-content has-background-white py-5 px-5  has-text-centered">
          <h1 className="title is-size-1">Thank You!!!</h1>
          <img src={logo} alt="check" style={{ height: "200px" }} />
          <h1 className="subtitle is-size-5">You order is submitted.</h1>
          <h2>
            Redirected to Home in {seconds} seconds or click
            <i onClick={gotohome}> here.</i>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
