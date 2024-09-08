import React, { useContext, useEffect, useState } from "react";
import { CardComponent } from "../components/CardComponent";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ProductosPage = () => {
  const { productos } = useContext(ProductosContext);
  const { addProducto, removeProducto } = useContext(CarritoContext);

  return (
    <>
      <h1>Productos</h1>
      <hr />
      {productos.map((producto) => (
        <CardComponent
          key={producto.id}
          id={producto.id}
          image={producto.image}
          title={producto.title}
          description={producto.description}
          price={producto.price}
          handlerAdd={() => addProducto(producto)}
          handlerRemove={() => removeProducto(producto.id)}
        />
      ))}
    </>
  );
};
