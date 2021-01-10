import React from "react";
import Products from "./components/Products";
import { motion } from "framer-motion";

const BodyPAge = () => {
  return (
    <div className="container">
      <div className="container">
        <motion.h1 className="title has-text-centered mt-3">
          OUR PRODUCTS
        </motion.h1>
        <Products />
      </div>
    </div>
  );
};

export default BodyPAge;
