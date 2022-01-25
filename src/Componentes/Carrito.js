import React from 'react';
import {NavItem} from 'reactstrap';
import iconoCarrito from "./Imagenes/iconoCarrito.png";
import './NavBar/NavBar.css';

const Carrito = () =>{
    return(
        <NavItem className='carrito'>
        <img src={iconoCarrito} alt="logo" className='carrito' />
        </NavItem>
    )
}

export default Carrito;