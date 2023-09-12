import React from "react";

const Cart = ({ cartObj }) => {
  const { dataObj, handleCartItem, handleStored, handleRemoved } = cartObj;
  // const {thumbnail,title,description}=dataObj

  return (
    <>
      <div className="shadow-xl card card-compact w-96 bg-base-100">
        <figure>
          <img className="w-full h-64" src={dataObj?.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{dataObj?.title}</h2>
          <p>{dataObj?.description}</p>
          <div className="justify-end card-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                handleCartItem(dataObj);
              }}
            >
              Buy Now
            </button>
            <button
              className="btn btn-info"
              onClick={() => handleStored(dataObj)}
            >
              ADD Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
