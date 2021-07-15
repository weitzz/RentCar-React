import React from 'react'
import {Nav,Logo,NavContainer,NavItem,NavLinks} from './NavbarElements'
import {Button} from '../Button'
const Navbar = () => {
    return (
        <Nav>
        <Logo>Venda<span>Cars</span></Logo>
        <NavContainer>
          <NavItem><NavLinks to="cars">Carros</NavLinks></NavItem>
          <NavItem><NavLinks to="">Como funciona?</NavLinks></NavItem>
          <NavItem><NavLinks to="">Sobre nós</NavLinks></NavItem>
          <Button to ='/login'>Login</Button>
        </NavContainer>
      </Nav>
    )
}

export default Navbar
