import styled from 'styled-components';
import {LightColor,primaryDarkColor} from '../../style/Colors'

export  const Header  = styled.header`
    width: 100%;
    height: 500px;
    background: ${primaryDarkColor};

`
export const Content = styled.div`
    max-width: 1000px;
    min-width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    /*
    height: 450px;
    background:var(--secondary);
    border-radius: 8px;
    box-shadow: 1px 0 10px 0 rgba(0,0,0, 0.5);
    position: relative;
    z-index: 10;*/

`;
export const HeaderBlock = styled.div`
    max-width: 1000px;
    min-width: 300px;
    height: 450px;
    background:${LightColor};
    border-radius: 8px;
    box-shadow: 1px 0 10px 0 rgba(0,0,0, 0.5);
    position: relative;
    z-index: 10;
    padding: 10px;

`;

export const HeaderBlockText = styled.div`
    position: absolute;
    bottom: 30%;
    left: 8%;
`; 



export const IMG = styled.img`
    width: 50%;
    position: absolute;
    right: 2%;
    bottom: 2%;

`;