import React, { useState } from "react";
import { Nav, Logo, NavContainer, NavItem, NavLinks } from "./NavbarElements";
import  Button  from "../Button";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const styleIcon = {
    zIndex: "1000",
    cursor: 'pointer'
  }
  return (
    <Nav>
      <Logo>
        Venda<span>Cars</span>
      </Logo>
      <div>
        <HiMenuAlt1
          size={"2.4rem"}
          open={open}
          onClick={() => setOpen(!open)}
          style={styleIcon }
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
          <Button to="/login" variant='primary' >Login</Button>
        </NavItem>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
