import React from 'react'
import {
    FooterContent,
    Main,
    ContentFooterLinks,
    FooterCompany,
    FooterRental,
    FooterSocial,
    FooterContact,
    FooterLast,
    SocialIcons,
    Facebook,
    Instagram} from './FooterElements'
const Footer = () => {
    return (
        <FooterContent>
         <Main>
    <ContentFooterLinks>
      <FooterCompany >
        <h3>Empresa</h3>
        <p>Sobre nós</p>
        <p>Contatos</p>
      </FooterCompany>
      <FooterRental >
        <h3>Aluguel</h3>
        <p>Motorista</p>
        <p>Test-Drive</p>
        <p>Ajuda</p>
      </FooterRental>
      <FooterSocial class="footer-social">
        <h3>Siga nossas Redes Sociais</h3>
          <SocialIcons class="socials-icons">
            <Facebook/>
            <Instagram/>
          </SocialIcons>
      </FooterSocial>
      <FooterContact class="footer-contact">
        <h3>Contatos</h3>
        <p>+55 2659-6987</p>
        <p>contato@email.com</p>
        <p>Nome da Rua RJ</p>
      </FooterContact>
    </ContentFooterLinks>
  </Main>
  <FooterLast>
    Tatiane Weitzel 2021 &#128150; 
  </FooterLast>
        </FooterContent>
    )
}

export default Footer
