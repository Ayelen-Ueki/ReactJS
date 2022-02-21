import React, { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";
import ItemCard from "../ItemCard/ItemCard";

const CartContext = () => {
  const [items] = useContext(ItemsContext);
  return (
    <div>
      {items.map((item) => {
        return <ItemCard data={item} key={item.id} />;
      })}
    </div>
  );
};

export default CartContext;
