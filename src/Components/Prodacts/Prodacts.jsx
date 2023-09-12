import React, { useEffect, useState } from "react";
import SingleProdact from "../SingleProdact/SingleProdact";
import { addToLocalStorage } from "../../../public/utily";

const Prodacts = () => {
  const [prodactsData, setProdactsData] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch("prodact.json")
      .then((res) => res.json())
      .then((data) => setProdactsData(data.products));
  }, []);
  const handleCartItem = (data) => {
    const newData = [...cartItem, data];
    setCartItem(newData);
  };

  return (
    <>
      <h2>My Total Prodact : {prodactsData.length}</h2>
      <h2>My Cart Item : {cartItem.length} </h2>
      <div className="grid grid-cols-3">
        {prodactsData.map((data) => (
          <SingleProdact
            dataObj={data}
            handleCartItem={handleCartItem}
            key={data.id}
          ></SingleProdact>
        ))}
      </div>
    </>
  );
};

export default Prodacts;
