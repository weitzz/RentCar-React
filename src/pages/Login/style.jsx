import styled from 'styled-components'
import {primaryDarkColor,LightColor, textColor, detailColor} from '../../style/Colors'
import {FaArrowLeft} from 'react-icons/fa'
import {BiLock} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
import {Link as LinkR} from 'react-router-dom'

export const LinkRouter = styled(LinkR)`
    height: 50px;
    width: 50px;
    margin:30px 0 0 30px;
`;

export const Container = styled.div`
    background-color: ${primaryDarkColor};
    width: 500px;
    height: 500px;
    display: flex;
    margin: 100px auto;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position: relative;
   
`;

export const TitleForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
`;


export const WrapperInputs = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
    position: relative;

input[type="text"]{
    height: 50px;
    width: 100%;
    background-color: ${LightColor};
    border: none;
    outline: none;
    border-radius: 4px;
    margin: 0 0 20px 0;
    color: ${textColor};
    font-size: 1em;
   
}
input::placeholder {
  color: #7e7e7e;
  padding-left: 40px;

}    
span{
    color: ${detailColor};
    margin: 0 auto;
    width: 100%;
}    

`;

export const IconArrowLeft = styled(FaArrowLeft)`
    color: ${detailColor};
    margin-top: 30px;
    width: 35px;
    height: 35px;
    transition: 0.8s ease ;
&:hover{
    color: ${textColor};
}    
`;
export const Email = styled(FiMail)`
    position: absolute;
    top: 15px;
    font-size: 1.3em;
    color: #7e7e7e;
    margin-left: 10px;
    &:focus{
        display: none;
    }
    

`;

export const Lock = styled(BiLock)`
    position: absolute;
    left: 0;
    font-size: 1.5em;
    color: #7e7e7e;
    top: 82px;
    margin-left: 10px;

`;

export const LinksContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    margin: 30px auto;
    justify-content: space-between;
    width: 82%;

    

`;


export const LinkPassword = styled(LinkR)`
    text-decoration: none;
    color: #7e7e7e;
    font-size: 0.9em;

    &:hover{
        color: ${textColor};
    }
`;
export const LinkRegister = styled(LinkR)`
    text-decoration: none;
    color: #7e7e7e;
    font-size: 0.9em;

    &:hover{
        color: ${textColor};
    }
    `;
