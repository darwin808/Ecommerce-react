import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";
import Navbar from "./Navbar";
import { globalStore } from "./Store";
import firebase from "./FbConfig.js/FbConfig";
import logo from "./assets/cp1.jpeg";
import Thankyou from "./components/Thankyou";
import logo2 from "./assets/ip4.jpg";
import logo3 from "./assets/ip5.jpg";
import logo4 from "./assets/ip6.jpg";
import EmptyCart from "./components/Emptycart";
import FileUpload from "./FileUpload";

const Cart = () => {
  const {
    cart,
    setdeleteiteminCart,
    clearCart,
    currentLoginUser,
  } = globalStore();
  const [localcart, setlocalcart] = useState([]);
  const [toggleThanks, settoggleThanks] = useState("");
  const [timer, setTimer] = useState(60);

  let history = useHistory();
  const gotohome = () => {
    history.push("/");
  };
  ////////**********FIREBASE DB************ ////////////////

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   db.collection('react').orderBy('timestamp')
  // });

  ////////**********FIREBASE DB************ ////////////////

  const itemPrice = cart.map((e) => {
    return <div>${e.price}</div>;
  });
  /**filtered name nad price */
  /**filtered name nad price */
  /**filtered name nad price */
  /**filtered name nad price */
  const filterName1 = cart.map((q) => q.name);
  const filterName2 = filterName1
    .filter((q, idx) => filterName1.indexOf(q) === idx)
    .sort();

  const filterPrice1 = cart.map((q) => q.price);
  const filterPrice2 = filterPrice1
    .filter((q, idx) => filterPrice1.indexOf(q) === idx)
    .sort();
  const filterPriceFInal = filterPrice2.map((e) => e);
  /**filtered name nad price */
  /**filtered name nad price */
  /**filtered name nad price */
  /**filtered name nad price */

  /**QUANTIITY */
  /**QUANTIITY */
  /**QUANTIITY */
  /**QUANTIITY */
  const quantity = cart.map((e) => e.name).sort();
  const quantity1 = quantity.filter((e) => e === "item1").length;
  const quantity2 = quantity.filter((e) => e === "item2").length;
  const quantity3 = quantity.filter((e) => e === "item3").length;
  const quantity4 = quantity.filter((e) => e === "item4").length;
  /**QUANTIITY */
  /**QUANTIITY */
  /**QUANTIITY */

  /**item-individual-total */
  /**item-individual-total */
  /**item-individual-total */
  const item1total1 = quantity1 * 10;
  const item2total2 = quantity2 * 20;
  const item3total3 = quantity3 * 30;
  const item4total4 = quantity4 * 30;

  const tax = 2;
  const cartTotalPrice =
    item1total1 + item2total2 + item3total3 + item4total4 + tax;

  const subtotal = item1total1 + item2total2 + item3total3 + item4total4;

  /**item-individual-total */
  /**item-individual-total */
  /**item-individual-total */

  /**DELETE ITEM IN CART */
  /**DELETE ITEM IN CART */
  /**DELETE ITEM IN CART */
  const deleteitem = (id) => {
    const x = cart.filter((e) => e.name !== id);
    console.log(id);
    // console.log(newcart);
    setdeleteiteminCart(x);
    // setlocalcart((localcart) => x);
  };
  /**DELETE ITEM IN CART */
  /**DELETE ITEM IN CART */
  /**DELETE ITEM IN CART */

  /**ADD TO DB */
  /**ADD TO DB */
  /**ADD TO DB */

  const addtoFirebase = () => {
    if (currentLoginUser !== "") {
      const db = firebase.firestore();
      db.collection("react")
        .add({
          cart: cart,
          Quantity: quantity,
          total: cartTotalPrice,
          timestamp: Date.now(),
          id: Math.random(),
        })

        .then(console.log("added to DB"));

      clearCart([]);
      settoggleThanks("is-active");
      setTimer(10);
    } else {
      history.push("/register");
    }
  };
  /**ADD TO DB */
  /**ADD TO DB */
  /**ADD TO DB */

  const toogleDisplay = cart.length === 0 ? "none" : "block";
  const nottoogleDisplay = cart.length !== 0 ? "none" : "block";

  return (
    <section className="cart-container">
      <Navbar />
      <div style={{ display: nottoogleDisplay }}>
        <EmptyCart />
      </div>
      <div className="container " style={{ display: toogleDisplay }}>
        <h1 className="title has-text-centered is-size-1">Your Cart </h1>

        {/* row1 */}
        <div className="columns">
          <div className="column is-2">
            <h1 className="subtitle is-size-3 has-text-centered">Products</h1>
            <div className="has-text-centered">
              <div>
                {" "}
                {quantity1 !== 0 ? (
                  <img src={logo} alt="ada" style={{ height: "80px" }} />
                ) : null}
              </div>
              <div>
                {" "}
                {quantity2 !== 0 ? (
                  <img src={logo2} alt="ada" style={{ height: "80px" }} />
                ) : null}
              </div>
              <div>
                {" "}
                {quantity3 !== 0 ? (
                  <img src={logo3} alt="ada" style={{ height: "80px" }} />
                ) : null}
              </div>
              <div>
                {" "}
                {quantity4 !== 0 ? (
                  <img src={logo4} alt="ada" style={{ height: "80px" }} />
                ) : null}
              </div>

              {/* {filterName2.map((e) => (
                <div key={e} className="mb-5">
                  <span>
                    {quantity1 !== 0 ? <img src={logo} alt="ada" /> : null}
                    {quantity2 !== 0 ? <img src={logo2} alt="ada" /> : null}
                  </span>
                </div>
              ))} */}
            </div>
          </div>

          <div className="column is-2">
            <h1 className="subtitle is-size-3 has-text-centered">Name</h1>
            <div className="has-text-centered">
              {filterName2.map((e) => {
                return <div className=" my-6">{e}</div>;
              })}
            </div>
          </div>

          <div className="column is-2">
            <h1 className="subtitle is-size-3  has-text-centered">Price</h1>
            <h2 className="has-text-centered">
              {filterPrice2.map((e) => {
                return <div className="my-6">${e}</div>;
              })}
            </h2>
          </div>

          <div className="column is-2 has-text-centered">
            <h1 className="subtitle is-size-3 has-text-centered ">Quantity</h1>
            <div className="my-6">
              {quantity1 !== 0 ? <div>{quantity1}</div> : null}
            </div>
            <div className="my-6">
              {quantity2 !== 0 ? <div>{quantity2}</div> : null}
            </div>
            <div className="my-6">
              {quantity3 !== 0 ? <div>{quantity3}</div> : null}
            </div>
            <div className="my-6">
              {quantity4 !== 0 ? <div>{quantity4}</div> : null}
            </div>
          </div>

          <div className="column is-2">
            <h1 className="subtitle  is-size-3 has-text-centered">Remove</h1>
            <div className="has-text-centered">
              {filterName2.map((e) => (
                <div key={e} className="my-6">
                  <button
                    className=""
                    onClick={() => {
                      deleteitem(e);
                    }}>
                    <i class="fas fa-ban fa-lg" style={{ color: "red" }}></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="column is-2 has-text-centered">
            <h1 className="subtitle is-size-3 has-text-centered">Total</h1>
            <div className="my-6">
              {quantity1 !== 0 ? <div>${item1total1}</div> : null}
            </div>
            <div className="my-6">
              {quantity2 !== 0 ? <div>${item2total2}</div> : null}
            </div>
            <div className="my-6">
              {quantity3 !== 0 ? <div>${item3total3}</div> : null}
            </div>
            <div className="my-6">
              {quantity4 !== 0 ? <div>${item4total4}</div> : null}
            </div>
          </div>
        </div>

        {/* row 2  */}
        <div className="columns ">
          <div className="column is-6"></div>
          <div
            className="column is-3 	has-text-right "
            style={{ display: toogleDisplay }}>
            <div className="subtitle has-text-weight-bold">Subtotal:</div>
            <div className="subtitle has-text-weight-bold">Tax:</div>
            <div className="subtitle has-text-weight-bold">Total:</div>
          </div>
          <div className="column is-3 	">
            <div>
              {subtotal !== 0 ? (
                <div className="subtitle subtitle ">${subtotal}</div>
              ) : null}
            </div>
            <div>
              {subtotal !== 0 ? (
                <div className="subtitle subtitle py-5">${tax}</div>
              ) : null}
            </div>
            <div>
              {subtotal !== 0 ? (
                <div className="subtitle">${cartTotalPrice}</div>
              ) : null}
            </div>
          </div>
        </div>

        {/* row 3 */}
        <div className="columns" style={{ display: toogleDisplay }}>
          <div className="column is-12">
            <button
              className="button is-primary is-medium is-fullwidth"
              onClick={addtoFirebase}>
              Checkout
            </button>
          </div>
        </div>
      </div>

      <Thankyou toggleThanks={toggleThanks} timer={timer} />
    </section>
  );
};

export default Cart;
