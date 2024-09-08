import React from "react";
import { NavBarComponent } from "./components/NavBarComponent";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProductosPage } from "./pages/ProductosPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBarComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ProductosPage />}></Route>
            <Route path="/carrito" element={<CarritoPage />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  );
};
