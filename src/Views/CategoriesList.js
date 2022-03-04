import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  return (
    <div className="d-flex justify-content-center p-5">
      <Dropdown toggle={function noRefCheck() {}}>
        <DropdownToggle caret>Antojos</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to="/categoria/tortas">Tortas</Link>
          </DropdownItem>
          <DropdownItem text>
            <Link to="/categoria/cookies">Cookies</Link>
          </DropdownItem>
          <DropdownItem text>
            <Link to="/categoria/alfajores">Alfajores</Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/categoria/boxes">Boxes</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CategoriesList;
