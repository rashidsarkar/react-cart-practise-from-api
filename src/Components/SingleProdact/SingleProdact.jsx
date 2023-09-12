import React from "react";
import Cart from "./Cart/Cart";

const SingleProdact = (dataObj) => {
  // const { addCart, dataObj } = dataObj;

  // console.log(dataObj);
  return (
    <>
      <Cart cartObj={dataObj}></Cart>
    </>
  );
};

export default SingleProdact;
