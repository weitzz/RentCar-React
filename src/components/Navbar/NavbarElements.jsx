import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {primaryDarkColor,detailColor,textColor} from '../../style/Colors'

export const Nav  = styled.nav`
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${textColor};
    background-color: transparent;


`;
export const Logo = styled(LinkR)`
    font-size: 1.9rem;
    color: ${detailColor};
    cursor: pointer;
    text-decoration:none;
    span{
        font-weight: 100;
    }
`;

export const NavContainer = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const NavItem = styled.li`
    list-style: none;
    padding: 10px;
    cursor: pointer;

`;
export const NavLinks = styled(LinkS)`
    text-decoration: none;
    color:${textColor}; 
    font-size: 1.1em;
    font-weight: 400;


&:hover{
    transition: 0.8s ease ;
    color:${detailColor};
}    
`;

export const Button = styled(LinkR)`
    border: 1px solid ${detailColor};
    color: ${detailColor};
    font-weight: 500;
    border-radius: 4px;
    background: transparent;
    padding:  9px 40px;
    cursor: pointer;
    margin-left: 30px;
    transition: 0.8s ease ;
    font-size: 1.1em;
    text-decoration:none;


&:hover{
    background: ${detailColor};
    color: ${primaryDarkColor};
}    
`;