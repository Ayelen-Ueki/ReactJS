import React, { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";
import ItemCard from "../ItemCard/ItemCard";

const CartContext = () => {
  const [items] = useContext(ItemsContext);
  return (
    <div>
      {items.map((item) => {
        return (
          <div> 
        <ItemCard data={item} key={item.id} />;
        Pedido: {items.pedido}
        </div>
        )
      })}
      
    </div>
  );
};

export default CartContext;
