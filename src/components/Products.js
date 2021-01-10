import React, { useState } from "react";
import logo from "../assets/cp1.jpeg";
import logo2 from "../assets/ip4.jpg";
import logo3 from "../assets/ip5.jpg";
import logo4 from "../assets/ip6.jpg";
import { motion } from "framer-motion";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { globalStore } from "../Store";
const Producs = () => {
  /**STORE */
  const { item1, item2, item3, item4, addItemtocart, cart } = globalStore();
  /**STORE */
  const [modalState, setmodalstate] = useState("");
  const [modalState2, setmodalstate2] = useState("");
  const [modalState3, setmodalstate3] = useState("");
  const [modalState4, setmodalstate4] = useState("");

  const handleViewitem1 = () => {
    setmodalstate("is-active");
  };
  const handleViewitem2 = () => {
    setmodalstate2("is-active");
  };

  const handleViewitem3 = () => {
    setmodalstate3("is-active");
  };
  const handleViewitem4 = () => {
    setmodalstate4("is-active");
  };

  const closemodal = () => {
    setmodalstate("");
    setmodalstate2("");
    setmodalstate3("");
    setmodalstate4("");
  };

  const containervariants = {
    hidden: { opacity: 0.03 },
    visible: { opacity: 1, transition: { delay: 0.8, duration: 1.5 } },
    exit: { x: "-100vw", transition: { ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="products-container"
      variants={containervariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      {/* MODAL here */}

      {/* modal item1 */}
      <div className={`modal ${modalState}`}>
        <div className="modal-background" onClick={closemodal}></div>
        <div className="modal-content has-background-white py-5 px-5  has-text-centered">
          <img src={logo} alt="item2" />
          <h1 className="title is-size-3">Item1</h1>
          <h1 className="title is-size-5">Price: $10</h1>
          <button onClick={closemodal} className="button is-warning">
            Continue Shopping
          </button>
          <button
            className="button is-primary"
            onClick={() => {
              addItemtocart([item1, ...cart]);
            }}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* modal item2 */}
      <div className={`modal ${modalState2}`}>
        <div className="modal-background" onClick={closemodal}></div>
        <div className="modal-content has-background-white py-5 px-5  has-text-centered">
          <img src={logo2} alt="item2" />
          <h1 className="title is-size-3">Item2</h1>
          <h1 className="title is-size-5">Price: $20</h1>
          <button onClick={closemodal} className="button is-warning">
            Continue Shopping
          </button>
          <button
            className="button is-primary"
            onClick={() => {
              addItemtocart([item2, ...cart]);
            }}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* modal item3 */}

      <div className={`modal ${modalState3}`}>
        <div className="modal-background" onClick={closemodal}></div>
        <div className="modal-content has-background-white py-5 px-5  has-text-centered">
          <img src={logo3} alt="item2" />
          <h1 className="title is-size-3">Item3</h1>
          <h1 className="title is-size-5">Price: $30</h1>
          <button onClick={closemodal} className="button is-warning">
            Continue Shopping
          </button>
          <button
            className="button is-primary"
            onClick={() => {
              addItemtocart([item3, ...cart]);
            }}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* modal item4 */}

      <div className={`modal ${modalState4}`}>
        <div className="modal-background" onClick={closemodal}></div>
        <div className="modal-content has-background-white py-5 px-5  has-text-centered">
          <img src={logo4} alt="item2" />
          <h1 className="title is-size-3">Item4</h1>
          <h1 className="title is-size-5">Price: $40</h1>
          <button onClick={closemodal} className="button is-warning">
            Continue Shopping
          </button>
          <button
            className="button is-primary"
            onClick={() => {
              addItemtocart([item4, ...cart]);
            }}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* MODAL here */}

      <div className="container">
        {/* 1st column */}
        <div className="columns py-6">
          {/* 1st item */}
          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered">
                <img src={logo} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 12</h1>
                <h2 className="subtitle is-size-4">$10</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem1}
                  className="button card-footer-item is-warning">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* 2nd item */}
          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={logo2} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 4s</h1>
                <h2 className="subtitle is-size-4">$20</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem2}
                  className="button card-footer-item is-danger">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* 3rd item */}
          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={logo3} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 5s</h1>
                <h2 className="subtitle is-size-4">$30</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem3}
                  className="button card-footer-item is-link">
                  View
                </button>
              </div>
            </div>
          </div>

          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={logo4} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 6s</h1>
                <h2 className="subtitle is-size-4">$40</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem4}
                  className="button card-footer-item is-info">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd column */}
        <div className="columns py-6">
          {/* 1st item */}
          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered">
                <img src={logo} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 12</h1>
                <h2 className="subtitle is-size-4">$10</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem1}
                  className="button card-footer-item is-warning">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* 2nd item */}
          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={logo2} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 4s</h1>
                <h2 className="subtitle is-size-4">$20</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem2}
                  className="button card-footer-item is-danger">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* 3rd item */}
          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={logo3} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 5s</h1>
                <h2 className="subtitle is-size-4">$30</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem3}
                  className="button card-footer-item is-link">
                  View
                </button>
              </div>
            </div>
          </div>

          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={logo4} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 6s</h1>
                <h2 className="subtitle is-size-4">$40</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem4}
                  className="button card-footer-item is-info">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd colums */}
        <div className="columns py-6">
          {/* 1st item */}
          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered">
                <img src={logo} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 12</h1>
                <h2 className="subtitle is-size-4">$10</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem1}
                  className="button card-footer-item is-warning">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* 2nd item */}
          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={logo2} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 4s</h1>
                <h2 className="subtitle is-size-4">$20</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem2}
                  className="button card-footer-item is-danger">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* 3rd item */}
          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={logo3} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 5s</h1>
                <h2 className="subtitle is-size-4">$30</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem3}
                  className="button card-footer-item is-link">
                  View
                </button>
              </div>
            </div>
          </div>

          <div className="column is-3">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={logo4} style={{ height: "100px" }} alt="item2" />
              </div>

              <div className="card-content">
                <h1 className="title is-size-3">iPhone 6s</h1>
                <h2 className="subtitle is-size-4">$40</h2>
              </div>

              <div className="card-footer">
                <button
                  onClick={handleViewitem4}
                  className="button card-footer-item is-info">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Producs;
