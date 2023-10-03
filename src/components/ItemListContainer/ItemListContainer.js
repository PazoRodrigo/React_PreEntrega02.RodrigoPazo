import React, { useEffect, useState } from "react";
import { getProducts } from "../../asyncData";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

/*
  Componente contenedor
  Almacena la lógica de estado del listado de los productos 
  */
const ItemListContainer = ({ greeting }) => {
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        SetProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="Title">
        <h2>{greeting}</h2>
      </div>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
