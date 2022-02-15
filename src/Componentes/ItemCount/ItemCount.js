import React, { useState } from 'react';
import './ItemCount.css';
import { Label, Input } from 'reactstrap';
import ItemDetail from '../ItemDetail/ItemDetail';
import VeganCookies from "../Imagenes/VeganCookies.png";
import Alfajorcitos from "../Imagenes/Alfajorcitos.png";
import BoxPersonalizado from "../Imagenes/BoxPersonalizado.png";


const ItemCount = ({ stock }) => {
    const [items, setItems] = useState({});

    const onAdd = (e) => {
        setItems(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(items)
        setItems('');
    }

    return (
        <div>
            <div className="Antojos">
                <ItemDetail className="Productos"
                    greetings='Opción 1'
                    img={VeganCookies}
                    cardTitle='Vegan Cookies'
                    cardDescription='Deliciosas cookies con chips de "chocolate" 100% veganas'
                />
                <ItemDetail className="Productos"
                    greetings='Opción 2'
                    img={Alfajorcitos}
                    cardTitle='Alfajorcitos'
                    cardDescription='Alfajorcitos de masa sablee con dulce de leche, espolvoreados con azúcar impalpable'
                />
                <ItemDetail className="Productos"
                    greetings='Opción 3'
                    img={BoxPersonalizado}
                    cardTitle='Boxes'
                    cardDescription='Cajas personalizables para regalar o regalarte!'
                />
            </div>
            <div>
                <p> Stock: {stock} </p>
                <form className='Form' onSubmit={onSubmit}>
                    <Label for="pedido" className='cantidad'>
                        Cantidad
                    </Label>
                    <Input
                        placeholder="Cantidad deseada"
                        onChange={onAdd}
                    />
                    <button className='button'> Finalizar Compra </button>
                </form>
            </div>
        </div>

    );
}

export default ItemCount;