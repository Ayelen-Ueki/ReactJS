import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import './NavBar.css';
import CartWidget from '../CartWidget';
import Logo from "../Imagenes/Logo.png"


const NavBar = ({ color }) => {
    return (
        <div className="Navigation" style={{ background: `${color}`}}>  
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
                        <NavItem>
                            <NavLink href="/components/">
                                Nosotros
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Recetas
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">
                                Contacto
                            </NavLink>
                        </NavItem>
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
                                <DropdownItem>
                                    Alfajores y Cookies
                                </DropdownItem>
                                <DropdownItem>
                                    Tortas
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Boxes
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                        <CartWidget/>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;