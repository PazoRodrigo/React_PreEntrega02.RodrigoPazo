import React from "react";
import { ItemCount } from "../ItemContador/ItemCount";

/*
  Componente de presentación
  Card del detalle del producto
  */
export const ItemDetail = ({
  id,
  rubro,
  nombre,
  descripcion,
  stock,
  imagen,
}) => {
  return (
    <article>
      <header className="CardItem">
        <h2 className="CardHeader">{nombre}</h2>
      </header>
      <picture className="ItemImgContainer">
        <img src={imagen} alt={nombre} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Rubro: ${rubro}</p>
        <p className="Info">Descripción: ${descripcion}</p>
        <p className="Info">Stock: {stock}</p>
      </section>
      <footer className="CardFooter">
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(cantidad) => console.log("Agrego", cantidad)}
        />
      </footer>
    </article>
  );
};
