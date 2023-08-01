import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./navbar.sass"

const CustomNavbar = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">School Managment System</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        {/* Add more NavItems here for other links */}
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;