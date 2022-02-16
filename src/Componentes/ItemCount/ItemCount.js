import React, { useState } from 'react';
import './ItemCount.css';
import { Label, Input } from 'reactstrap';

const ItemCount = () => {
    const [items, setItems] = useState('');

    const itemsCount = (e) => {
        setItems(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(items < 9){
            alert("Gracias por tu compra!")
        }
        else{
        alert("No hay suficientes unidades");
        }
        setItems('');
    }

    return (
        <div>
            <form className='Form' onSubmit={onSubmit}>
                <Label for="pedido" className='cantidad'>
                    Cantidad
                </Label>
                <Input
                    placeholder="Cantidad deseada"
                    onChange={itemsCount}
                    value={items}
                />
                <button className='button'> Finalizar Compra </button>
            </form>
        </div>
    );
}

export default ItemCount;