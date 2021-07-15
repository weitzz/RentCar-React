import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
//import {Link as LinkS} from 'react-scroll'
import {primaryDarkColor,detailColor,textColor} from '../../style/Colors'

export const Button = styled(LinkR)`
background: ${detailColor};
color: ${textColor};
border: none;
font-weight: 400;
border-radius: 4px;
padding:  9px 40px;
cursor: pointer;
margin-left: 30px;
transition: 0.8s ease ;
font-size: 1.1em;
text-decoration:none;
outline: none;
text-align: center;


&:hover{
color: ${detailColor};
background: transparent;



}    
`;

export const BtnCard = styled(Button)`
    width: 80%;
    margin:0 auto

`;


export const BtnInput = styled.button`
    width: 150px;
    height: 50px;
    border-radius:  0 4px 4px 0;
    border: none;
    background-color: ${detailColor};
    color: ${textColor} ;
    font-weight: 400;
    cursor: pointer;
    font-size: 1.1em;
    transition: 0.8s ease ;
    &:hover{
    background: ${primaryDarkColor} ;
    color:${detailColor};
    }
`;

export const BtnLogin = styled(LinkR)`
    width: 60%;
    margin: 20px auto;
    height: 50px;
    text-decoration: none;
    color: ${textColor};
    background-color: ${detailColor};
    border-radius: 4px;
    text-align: center;
    padding: 10px 0;
    font-size: 1.4em;
    transition: 0.8s ease ;

    &:hover{
    color: ${detailColor};
    background: transparent;
    }
`;
