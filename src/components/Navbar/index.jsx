import React, { useState } from "react";
import { Nav, Logo, NavContainer, NavItem, NavLinks } from "./NavbarElements";
import { Button } from "../Button";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <Logo>
        Venda<span>Cars</span>
      </Logo>
      <div>
        <HiMenuAlt1
          size={"2.2rem"}
          open={open}
          onClick={() => setOpen(!open)}
          style={{ zIndex: "1000" }}
        />
      </div>
      <NavContainer open={open}>
        <NavItem>
          <NavLinks to="cars">Carros</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="">Como funciona?</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="">Sobre nós</NavLinks>
        </NavItem>
        <NavItem>
          <Button to="/login">Login</Button>
        </NavItem>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
