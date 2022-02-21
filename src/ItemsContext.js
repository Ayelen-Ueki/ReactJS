import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

const initialState = [
  { id: 1, producto: "Cookies", precio: 500, stock: 10, pedido: 0 },
  { id: 2, producto: "Alfajorcitos", precio: 600, stock: 10, pedido: 0 },
  { id: 3, producto: "Boxes", precio: 2000, stock: 10, pedido: 0 },
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
