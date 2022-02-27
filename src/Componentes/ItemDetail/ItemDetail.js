import ItemCount from "../ItemCount/ItemCount";
import React, { useContext, useState } from "react";
import { ItemsContext } from "../../ItemsContext";
import ItemCard from "../ItemCard/ItemCard";

const ItemDetail = () => {
  const [items, onAdd, onDeduct] = useContext(ItemsContext);
  const [order, setOrder] = useState([]);
  const onAddCart = (e) => {
    setOrder(e.target.value);
    console.log(order);
  };
  return (
    <div>
      {items.map((item) => {
        return <ItemCard data={item} key={item.id} />;
      })}
      <ItemCount onAdd={onAdd} onDeduct={onDeduct} onAddCart={onAddCart} />
    </div>
  );
};

export default ItemDetail;
