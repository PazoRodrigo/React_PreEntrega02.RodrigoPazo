import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncData";
/*
  Componente contenedor
  Almacena la lógica de estado de un producto
*/

export const ItemDetailContainer = () => {
  const [product, SetProduct] = useState(null);

  useEffect(() => {
    getProductById(1)
      .then((response) => {
        console.log(response);
        SetProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};
