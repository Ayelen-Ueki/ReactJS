import React, { useState } from 'react';
import './ItemCount.css';


const ItemCount = () => {

    const [stock, setStock] = useState (9);
    const [initial, setInitial] = useState (1);

    const onAdd = () => {
        if ((stock >= 1) && (stock <= 9)) {
            setInitial (initial + 1);
            setStock (stock - 1);    
        }
        else {
            alert("Lo sentimos, ya no hay stock");
        }
    }
    const substract = () => {
        if ((stock >= 1) && (stock <= 9)) {
            setInitial (initial - 1);
            setStock (stock + 1);    
        }
        else {
            alert("No es posible ingresar números negativos");
        }  
    }

    return(
        <div>
        <p> Stock: {stock} </p>
        <div className='items'>
            <button onClick={substract}> - </button>
            <p>{initial}</p>
            <button onClick={onAdd}> + </button>
        </div>
    </div>
    )
}

export default ItemCount; 