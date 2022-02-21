import "./ItemCount.css";
import React, { useState } from 'react';
import { Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const ItemCount = (onAdd, onDeduct, pedido, prodId) => {

  const [order, setOrder] = useState ([])

  const onAddCart = (e) => {
    setOrder(e.target.value); 
  };

  const onSubmit = (e) => {
    e.preventDefault(); 
    console.log(order);
    setOrder("");
  };

  return (
    <div>
      <form className="Form">
        <Label for="pedido" className="cantidad">
          Cantidad
        </Label>
        <Input
          placeholder="Cantidad deseada"
          value={pedido}
          onChange={onAddCart}
        />
        <div>
          <button onClick={() => onDeduct(prodId)} value={onDeduct}> - </button>
          <button onClick={() => onAdd(prodId)} value={onAdd}> + </button>
          <Link to="/cart">
            <button className="button"> Finalizar compra </button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button onClick={onSubmit} value={onAddCart}>
              Agregar al carrito
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ItemCount;
