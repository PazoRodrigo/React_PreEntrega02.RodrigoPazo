import React from "react";
import "./Item.css";

export const Item = ({ id, rubro, nombre, valor, stock, imagen }) => {
  /*
  Componente de presentación
  Card de cada producto
  */
  return (
    <article className="CardItem">
      <header className="CardHeader">
        <h2 className="CardTitle">{nombre}</h2>
      </header>
      <picture>
        <img src={imagen} alt={nombre} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${valor}</p>
        <p className="Info">Stock: {stock}</p>
      </section>
      <footer className="CardFooter">
        <button className="btnDetalle">Ver Detalle</button>
      </footer>
    </article>
  );
};
