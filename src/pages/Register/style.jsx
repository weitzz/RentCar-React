import {LightColor, textColor, detailColor,primaryDarkColor} from '../../style/Colors'
import styled from 'styled-components'
import {BiUserCircle} from 'react-icons/bi'

export const Container = styled.div`
    background-color: ${primaryDarkColor};
    width: 500px;
    height: 560px;
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

export const User =styled(BiUserCircle)`
    position: absolute;
    left: 0;
    font-size: 1.5em;
    color: #7e7e7e;
    top: 82px;
    margin-left: 10px;

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
    margin: 10px auto;
}    

`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px auto;
    justify-content: space-between;
    position: absolute;
    bottom: 2%;
    left: 10%;
    width: 82%;
`;