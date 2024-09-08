import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Swal from "sweetalert2";

export const CarritoPage = () => {
  const { listaCompras, removeProducto, incrementProducto, decrementProducto } =
    useContext(CarritoContext);

  const calculateTotal = () => {
    return listaCompras
      .reduce(
        (total, producto) => total + producto.price * producto.cantidad,
        0
      )
      .toFixed(2);
  };

  const handleComprar = () => {
    const productosComprados = listaCompras
      .map((producto) => `${producto.title} x ${producto.cantidad}`)
      .join("\n");
    Swal.fire({
      icon: "success",
      title: "La compra se ha realizado con éxito",
      html: `<p>Has comprado</p> <pre>${productosComprados}</pre>`,
    });
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((producto) => (
            <tr key={producto.id}>
              <th scope="row">{producto.title}</th>
              <td>{producto.price}</td>

              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => decrementProducto(producto.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{producto.cantidad}</button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => incrementProducto(producto.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeProducto(producto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <th>
              <b>TOTAL:</b>
            </th>
            <td></td>
            <td></td>
            <td>${calculateTotal()}</td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleComprar}
        >
          Comprar
        </button>
      </div>
    </>
  );
};
