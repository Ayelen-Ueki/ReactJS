import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import './NavBar.css';
import CartWidget from '../CartWidget';
import Logo from "../Imagenes/Logo.png"
import { Link } from 'react-router-dom';


const NavBar = ({ color }) => {
    return (
        <div className="Navigation" style={{ background: `${color}` }}>
            <Navbar
                expand="md"
                light
            >
                <NavbarBrand href="/" className='navBar'>
                    <img src={Logo} alt="logo" className='logo' />
                    <h1> Feelin Pastelería </h1>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <Link to='/Nosotros'>
                            <NavItem>
                                <NavLink href="/components/">
                                    Nosotros
                                </NavLink>
                            </NavItem>
                        </Link>
                        <Link to='/Recetas'>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    Recetas
                                </NavLink>
                            </NavItem>
                        </Link>
                        <Link to='/Contacto'>
                            <NavItem>
                                <NavLink href="/components/">
                                    Contacto
                                </NavLink>
                            </NavItem>
                        </Link>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Antojos
                            </DropdownToggle>
                            <DropdownMenu right>
                                <Link to='/'>
                                    <DropdownItem>
                                        Alfajores y Cookies
                                    </DropdownItem>
                                </Link>
                                <Link to='/Tortas'>
                                    <DropdownItem>
                                        Tortas
                                    </DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <Link to='/Boxes'>
                                <DropdownItem>
                                    Boxes
                                </DropdownItem>
                                </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <CartWidget />
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;