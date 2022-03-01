import React, { createContext, useState } from "react";
import VeganCookies from "./Componentes/Imagenes/VeganCookies.png";
import Alfajorcitos from "./Componentes/Imagenes/Alfajorcitos.png";
import BoxPersonalizado from "./Componentes/Imagenes/BoxPersonalizado.png";

export const ItemsContext = createContext();

const initialState = [
  {
    id: 1,
    img: VeganCookies,
    producto: "Cookies",
    precio: 500,
    stock: 10,
    pedido: 0,
  },
  {
    id: 2,
    img: Alfajorcitos,
    producto: "Alfajorcitos",
    precio: 600,
    stock: 10,
    pedido: 0,
  },
  {
    id: 3,
    img: BoxPersonalizado,
    producto: "Boxes",
    precio: 2000,
    stock: 10,
    pedido: 0,
  },
];

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);

  const onAdd = (prodId) => {
    const updatePedido = items.map((item) => {
      return prodId === item.id
        ? { ...item, pedido: item.pedido + 1 }
        : { ...item };
    });
    setItems(updatePedido);
  };

  const onDeduct = (prodId) => {
    const updatePedido = items.filter((item) => item.id !== prodId);
    setItems(updatePedido);
  };

  return (
    <ItemsContext.Provider value={[items, setItems, onAdd, onDeduct]}>
      {children}
    </ItemsContext.Provider>
  );
};
