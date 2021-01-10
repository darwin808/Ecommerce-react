import React from "react";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";
import { globalStore } from "./Store";

const UserProfile = () => {
  const { fname, lname, age, currentLoginUser } = globalStore();
  return (
    <div>
      <Navbar />
      <div className="hero is-info">
        <h1>userprofile</h1>
        <h1>
          {currentLoginUser} - {} -{" "}
        </h1>
      </div>
    </div>
  );
};

export default UserProfile;
