import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";
import { globalStore } from "./Store";
import { firebase } from "@firebase/app";
import "@firebase/auth";

const Navbar = () => {
  const {
    cart,
    cartitems,
    item1counter,
    additem1,
    currentLoginUser,
    setcurrentLoginUser,
    fname,
    lname,
    age,
    setfname,
    setlname,
    setage,
  } = globalStore();

  useEffect(async () => {
    const db = firebase.firestore();
    try {
      const user = await firebase.auth().currentUser;
      const displayName = await db
        .collection("users")
        .doc(user.uid)
        .get()
        .then((e) => e.data().fname);
      setcurrentLoginUser(displayName);
      // console.log(
      //   db
      //     .collection("users")
      //     .doc(user.uid)
      //     .get()
      //     .then((e) => e.data().lname)
      // );

      console.log(displayName);
      //console.log(user.email);
      const current = await firebase.auth().onAuthStateChanged((e) => {
        e ? console.log("user login", e) : console.log("user logout");
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentLoginUser]);

  const [burger, setburger] = useState("  ");
  let history = useHistory();
  const gotoCart = () => {
    history.push("/cart");
    setburger("");
  };

  const gotohome = () => {
    history.push("/");
    setburger("");
  };

  const showburger = () => {
    // console.log(e.target);
    setburger("is-active");
  };

  const gotologin = () => {
    history.push("/login");
    setburger("");
  };

  const gotoregister = () => {
    history.push("/register");
    setburger("");
  };

  const gotoUserProfile = () => {
    history.push("/user");
  };

  const signOutUser = async () => {
    await firebase
      .auth()
      .signOut()
      .then((e) => {
        console.log(e);
      });
    window.location.reload();

    // await firebase
    //   .auth()
    //   .signOut()
    //   .then((e) => {
    //     console.log("adadad");
    //     history.push("/");
    //   });
  };

  const countCartItems = cart.length;

  return (
    // <div className="Navbar-container pt-4">
    //   <div className="container">
    //     <img
    //       onClick={gotohome}
    //       src={logo}
    //       alt="asdada"
    //       height="40px"
    //       width="40px"
    //     />
    //     <ul className="nav-links pb-4">
    //       <li>Products</li>
    //       <li onClick={gotoCart}>My Cart{cartitems}</li>
    //     </ul>
    //   </div>
    // </div>

    <nav className="navbar is-white has-shadow">
      <div className="navbar-brand ">
        <a className="navbar-item" onClick={gotohome}>
          {/* <img
            className=""
            src={logo}
            alt="weqweq"
            style={{ height: "100%" }}
          /> */}
          <h1 className="title ml-6">iPhone Traders</h1>
        </a>

        <div
          href=""
          className="navbar-burger"
          onClick={() => {
            showburger();
          }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar-menu ${burger} mr-6`} id="navilinks">
        <div className="navbar-end">
          {currentLoginUser !== "" ? (
            <a
              className="navbar-item is-capitalized has-text-weight-bold is-size-4"
              onClick={gotoUserProfile}>
              {currentLoginUser}
            </a>
          ) : null}

          <a href="#" className="navbar-item" onClick={gotohome}>
            Home
          </a>
          {currentLoginUser !== "" ? (
            <a className="navbar-item" onClick={signOutUser}>
              Signout
            </a>
          ) : null}
          {currentLoginUser !== "" ? null : (
            <a href="#" className="navbar-item" onClick={gotologin}>
              Login
            </a>
          )}

          {currentLoginUser !== "" ? null : (
            <a href="#" className="navbar-item" onClick={gotoregister}>
              Register
            </a>
          )}

          <a href="#" className="navbar-item" onClick={gotoCart}>
            Cart{countCartItems == 0 ? <p></p> : <p>({countCartItems})</p>}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
