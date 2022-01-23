import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Nav } from 'reactstrap';
import './NavBar.css';

const NavBar = (props) => {
        <div className="Navigation" style={{ background: "yellow", border: `10px solid ${props.color}` }}>
            <Navbar
                color="faded"
                light
            >
                <NavbarBrand
                    className="me-auto"
                    href="/"
                >
                    Feelin Pastelería
                </NavbarBrand>
                <NavbarToggler
                    className="me-2"
                    onClick={function noRefCheck() { }}
                />
                <Collapse navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">
                                Inicio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">
                                Nosotros
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">
                                Antojos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">
                                Recetas
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">
                                Contacto
                            </NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
};

export default NavBar;