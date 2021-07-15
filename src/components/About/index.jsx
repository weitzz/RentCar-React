import React from 'react'
import {TitleSection,ParagraphSection,TitleCard,SectionTitle} from '../Text'
import {
    AboutContent,
    AboutWrapper,
    TextAbout,AboutItem,
    IconContent,
    CreditCard,
    LightBulb,
    CarSide} from './AboutElements'
const About = () => {
    return (
        <AboutContent>
            <SectionTitle>
            <TitleSection>Sobre nós</TitleSection>
            <ParagraphSection>Expansão de nossa atividade aponta</ParagraphSection>
            </SectionTitle>
            <AboutWrapper>
                <AboutItem>
                    <IconContent>
                        <LightBulb/>
                    </IconContent>
                    <TextAbout>
                    <TitleCard>Lorem Ipsum</TitleCard>
                    <p>Neste sentido, o aumento do diálogo entre os 
                       diferentes setores produtivos deve passar por modificações.</p>
                    </TextAbout>
                </AboutItem>
                <AboutItem>
                    <IconContent>
                    <CreditCard />
                    </IconContent>
                    <TextAbout>
                    <TitleCard>Lorem Ipsum</TitleCard>
                    <p>A prática cotidiana prova que a contínua expansão de nossa 
                        atividade aponta.</p>
                    </TextAbout>
                </AboutItem>
                <AboutItem>
                    <IconContent>
                    <CarSide/>
                    </IconContent>
                    <TextAbout>
                    <TitleCard>Lorem Ipsum</TitleCard>
                    <p>É claro que a hegemonia do ambiente político pode nos levar a 
                        considerar a reestruturação.</p>
                    </TextAbout>
                </AboutItem>
            </AboutWrapper>
        </AboutContent>
    )
}

export default About
