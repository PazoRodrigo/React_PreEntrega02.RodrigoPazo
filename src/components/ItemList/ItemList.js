import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  /*
  Componente de presentación
  Lista los productos
  */
  return (
    <div className="ListGroup">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
