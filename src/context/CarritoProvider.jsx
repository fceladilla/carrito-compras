import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

export const CarritoProvider = ({ children }) => {
  const initialState = [];

  const carritoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] Agregar Producto":
        return [...state, action.payload];
      case "[CARRITO] Quitar Producto":
        return state.filter((producto) => producto.id !== action.payload);
      case "[CARRITO] Incrementar Cantidad":
        return state.map((producto) => {
          const cant = producto.cantidad + 1;
          if (producto.id === action.payload)
            return { ...producto, cantidad: cant };
          return producto;
        });

      case "[CARRITO] Disminuir Cantidad":
        return state.map((producto) => {
          const cant = producto.cantidad - 1;
          if (producto.id === action.payload && producto.cantidad > 1)
            return { ...producto, cantidad: cant };
          return producto;
        });

      default:
        return state;
    }
  };

  const [listaCompras, dispatch] = useReducer(carritoReducer, initialState);

  const addProducto = (producto) => {
    producto.cantidad = 1;
    const action = {
      type: "[CARRITO] Agregar Producto",
      payload: producto,
    };
    dispatch(action);
  };
  const removeProducto = (id) => {
    const action = {
      type: "[CARRITO] Quitar Producto",
      payload: id,
    };
    dispatch(action);
  };
  const incrementProducto = (id) => {
    const action = {
      type: "[CARRITO] Incrementar Cantidad",
      payload: id,
    };
    dispatch(action);
  };
  const decrementProducto = (id) => {
    const action = {
      type: "[CARRITO] Disminuir Cantidad",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        addProducto,
        removeProducto,
        incrementProducto,
        decrementProducto,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
