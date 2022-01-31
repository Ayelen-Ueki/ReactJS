import React from 'react';
import {NavItem} from 'reactstrap';
import iconoCarrito from "./Imagenes/iconoCarrito.png";
import './NavBar/NavBar.css';

const CartWidget = () =>{
    return(
        <div>
        <NavItem className='carrito'>
        <img src={iconoCarrito} alt="logo" className='carrito' />
        </NavItem>
        </div>
    )
}

export default CartWidget;