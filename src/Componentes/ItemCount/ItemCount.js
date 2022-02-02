import React, { useState } from 'react';
import './ItemCount.css';



const ItemCount = ({stock, initial}) => {
    stock = 9;
    initial = 1;

    const [items, setItems] = useState(initial);

    const onAdd = () => {
        if (items < stock) {
            setItems(items + 1);
        }
    }
    const onDeduct = () => {
        if (items > initial) {
            setItems(items - 1);
        }
    }

    return (
        <div>
            <p> Stock: {stock} </p>
            <div className='items'>
                <button onClick={onDeduct}> - </button>
                <p>{items}</p>
                <button onClick={onAdd}> + </button>
            </div>
        </div>
    );
}

export default ItemCount;