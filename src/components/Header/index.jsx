import React from 'react'
import Navbar from '../Navbar'
import Image from '../../img/White-Volkswagen-Beetle-.png'
import {Header,Content,HeaderBlock,HeaderBlockText,IMG} from './HeaderElements'
import {Title,Paragraph} from '../Text'

const HeroContainer = () => {
    return (
        <Header>
            <Content>
            <Navbar/>
          <HeaderBlock>
          <HeaderBlockText>
            <Title>Os melhores carros a venda</Title>
            <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, reiciendis? </Paragraph>
          </HeaderBlockText>
          <IMG src={Image} alt=""/>
        </HeaderBlock>
      </Content>
        </Header>
    )
}

export default HeroContainer
