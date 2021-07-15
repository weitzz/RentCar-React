import styled from 'styled-components'
import {FaCreditCard,FaRegLightbulb,FaCarSide}  from "react-icons/fa"
import {primaryDarkColor,detailColor} from '../../style/Colors'

export const AboutContent = styled.section`
    max-width: 1000px;
    min-width: 300px;
    height: auto;
    position: relative;
    z-index: 10;
    margin: 0 auto;
`;

export const TitleAbout = styled.div`
    margin-top: 200px;
    padding-bottom: 20px;

`;

export const AboutWrapper = styled.div`
    max-width: 1000px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill ,minmax(300px,1fr));
    grid-gap: 20px;
    padding: 30px;

`;

export const AboutItem = styled.div`
    width:300px;
    height: 300px;
    background: ${primaryDarkColor};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:10px;
`;

export const IconContent = styled.div`
    width:100%;
    position:relative;
    height:100px;
`;
export const CreditCard = styled(FaCreditCard)`
    font-size: 3.2rem;
    color:${detailColor};
    position: absolute;
    top:20px;
    left:20px;

`;


export const LightBulb = styled(FaRegLightbulb)`
    font-size: 3.2rem;
    color:${detailColor};
    position: absolute;
    top:20px;
    left:20px;
`;

export const CarSide =  styled(FaCarSide)`
    font-size: 3.2rem;
    color:${detailColor};
    position: absolute;
    top:20px;
    left:20px;
    
`;

export const TextAbout = styled.div`
    width:80%;
    margin-left: 20px;
    text-align:left;
    height: 200px;

p{
    margin-top:20px;
    color:#c7c7c7;
    font-size: 1rem;
    line-height: 1.5;
}    

`;

