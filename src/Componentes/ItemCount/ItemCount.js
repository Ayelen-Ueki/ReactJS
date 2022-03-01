import "./ItemCount.css";
import { Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const ItemCount = ({onAddCart, order, onSubmit, onDeduct}) => {

  return (
    <div>
      <form className="Form">
        <Label for="pedido" className="cantidad">
          Cantidad
        </Label>
        <Input
          placeholder="Cantidad deseada"
          value={order}
          onChange={onAddCart}
        />
        <div>
          <Link to="/Cart">
            <button className="button" onClick={onSubmit}> Finalizar compra </button>
          </Link>
        </div>
        <div>
            <button onClick={onAddCart}>
              Agregar al carrito
            </button>
            <button onClick={onDeduct}>
              Eliminar
            </button>
        </div>
      </form>
    </div>
  );
};

export default ItemCount;
