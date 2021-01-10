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

const Register = () => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [fname, setfname] = useState();
  const [lname, setflname] = useState();
  const [age, setage] = useState();
  const history = useHistory();

  const registerUser = async (e) => {
    const db = firebase.firestore();
    e.preventDefault();
    setUserEmail("");
    setUserPassword("");

    await firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then((cred) => {
        return db.collection("users").doc(cred.user.uid).set({
          fname: fname,
          lname: lname,
          age: age,
        });
      })
      .then((e) => {
        console.log(e);
        history.push("/");
      });
  };
  return (
    <div>
      <Navbar />
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box" onSubmit={registerUser}>
                  <div className="field">
                    <label for="" className="label">
                      First Name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Firstname"
                        value={fname}
                        onChange={(e) => {
                          setfname(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Lastname"
                        value={lname}
                        onChange={(e) => {
                          setflname(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label for="" className="label">
                      Age
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => {
                          setage(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label for="" className="label">
                      Email
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        placeholder="e.g. johndoe@gmail.com"
                        className="input"
                        value={userEmail}
                        onChange={(e) => {
                          setUserEmail(e.target.value);
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
                        placeholder="*************"
                        value={userPassword}
                        onChange={(e) => {
                          setUserPassword(e.target.value);
                        }}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <button class="button is-success">Register</button>
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

export default Register;
