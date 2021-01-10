import React, { useState } from "react";
import Navbar from "../Navbar";
import { firebase } from "@firebase/app";
import "@firebase/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then((e) => {
          // console.log(e);
          history.push("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box" onSubmit={loginUser}>
                  <div className="field">
                    <label for="" className="label">
                      Email
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        placeholder="e.g. bobsmith@gmail.com"
                        className="input"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label for="" className="label">
                      Password
                    </label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label for="" className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>

                  <div class="field">
                    <button class="button is-success">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
