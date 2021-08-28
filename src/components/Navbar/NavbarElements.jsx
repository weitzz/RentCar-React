import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { primaryDarkColor, detailColor, textColor } from "../../style/Colors";

export const Nav = styled.nav`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${textColor};
  background-color: transparent;
  z-index: 999;

  div {
    display: none;
    transition: color 0.8s ease;
    &:hover {
      color: ${detailColor};
    }
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }
  }
`;
export const Logo = styled(LinkR)`
  font-size: 1.9rem;
  color: ${detailColor};
  cursor: pointer;
  text-decoration: none;
  span {
    font-weight: 100;
  }
`;

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: ${primaryDarkColor};
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    height: 100vh;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
`;

export const NavItem = styled.li`
  list-style: none;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
  }
`;
export const NavLinks = styled(LinkS)`
  text-decoration: none;
  color: ${textColor};
  font-size: 1.1em;
  font-weight: 400;
  transition: color 0.8s ease;
  @media (max-width: 768px) {
    align-items: center;
    font-size: 1.5em;
  }

  &:hover {
    color: ${detailColor};
  }
`;
