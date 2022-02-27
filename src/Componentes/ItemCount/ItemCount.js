import "./ItemCount.css";
import { Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const ItemCount = ({onAdd, onDeduct, pedido, prodId, onAddCart}) => {

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
          <button onClick={() => onDeduct(prodId)}> - </button>
          <button onClick={() => onAdd(prodId)}> + </button>
          <Link to="/cart">
            <button className="button"> Finalizar compra </button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button onClick={onAddCart}>
              Agregar al carrito
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ItemCount;
