import React from "react";
import {
  Navbar,
  NavbarBrand,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import "./NavBar.css";
import CartWidget from "../CartWidget";
import Logo from "../Imagenes/Logo.png";
import { Link } from "react-router-dom";
import CategoriesList from "../../Views/CategoriesList";

const NavBar = ({ color }) => {
  return (
    <div className="Navigation" style={{ background: `${color}` }}>
      <Navbar expand="md" light>
        <NavbarBrand href="/" className="navBar">
          <img src={Logo} alt="logo" className="logo" />
          <h1> Feelin Pastelería </h1>
        </NavbarBrand>
        <div>
          <Navbar color="faded" light>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                <Link to="/">Inicio</Link>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/nosotros">Nosotros</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/recetas">Recetas</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Navbar>
        </div>
        <CategoriesList/>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
