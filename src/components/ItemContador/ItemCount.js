import React, { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const Increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const Decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={Decrement}>
          -
        </button>
        <h1 className="Number">{quantity}</h1>
        <button className="Button" onClick={Increment}>
          +
        </button>
      </div>
      <button
        className="StockButton"
        onClick={() => onAdd(quantity)}
        disabled={!stock}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};
