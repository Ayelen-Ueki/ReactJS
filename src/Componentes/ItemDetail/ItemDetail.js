import ItemCount from "../ItemCount/ItemCount";
import React, { useContext, useState } from "react";
import { ItemsContext } from "../../ItemsContext";
import ItemCard from "../ItemCard/ItemCard";

const ItemDetail = () => {
  const [items, setItems] = useContext(ItemsContext);
  const [order, setOrder] = useState([]);
  const onAddCart = (e) => {
    setOrder(e.target.value);
  };

  const onSubmit = (e, prodId) =>{
    e.preventDefault(); 
    const updatePedido = items.map((item) => {
      return prodId === item.id
        ? { ...item, pedido: item.pedido + order }
        : { ...item };
    });
    setItems(updatePedido);
  }

  const onDeduct = (prodId) =>{
    const updatePedido = items.filter((item) => item.id !== prodId);
    setItems(updatePedido);
  }
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <ItemCard data={item} key={item.id} />
            <ItemCount
              onAddCart={onAddCart}
              data={order}
              onSubmit={onSubmit}
              onDeduct={onDeduct}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
