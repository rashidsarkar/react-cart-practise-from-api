import React, { useEffect, useState } from "react";
import SingleProdact from "../SingleProdact/SingleProdact";
import { addItem, getStoredCard } from "../../../public/utily";
import StoredCard from "../StoredCart/StoredCard";

const Prodacts = () => {
  const [prodactsData, setProdactsData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [stord, setStord] = useState([]);

  useEffect(() => {
    fetch("prodact.json")
      .then((res) => res.json())
      .then((data) => setProdactsData(data.products));
  }, []);

  //load cart from local
  useEffect(() => {
    if (prodactsData.length > 0) {
      const stoedCartId = getStoredCard();

      const savedProdact = [];
      for (const idp of stoedCartId) {
        const adeedProdact = prodactsData.find((prodact) => prodact.id === idp);
        if (adeedProdact) {
          savedProdact.push(adeedProdact);
        }
      }
      console.log(savedProdact);
      setStord(savedProdact);
    }
  }, [prodactsData]);
  const handleCartItem = (data) => {
    const newData = [...cartItem, data];
    setCartItem(newData);
  };
  const handleStored = (item) => {
    const newStor = [...stord, item];
    setStord(newStor);

    addItem(item.id);
  };
  return (
    <div className="mx-auto">
      <h2>My Total Prodact : {prodactsData.length}</h2>
      <h2>My Cart Item : {cartItem.length} </h2>

      <div>
        <StoredCard stord={stord}></StoredCard>
      </div>
      <div className="grid grid-cols-3">
        {prodactsData.map((data) => (
          <SingleProdact
            dataObj={data}
            handleCartItem={handleCartItem}
            handleStored={handleStored}
            key={data.id}
          ></SingleProdact>
        ))}
      </div>
    </div>
  );
};

export default Prodacts;
