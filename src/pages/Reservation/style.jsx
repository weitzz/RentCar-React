import styled from 'styled-components'
import {LightColor, textColor,primaryDarkColor} from '../../style/Colors'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
`;


export const ContainerCar = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const ContainerPayments =styled.div`
    background-color: ${primaryDarkColor};
    width: 40%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    `;

export const TitleCar = styled.div`
    margin-left: 50px;
    margin-top: 30px;
    width: 300px;

`;    

export const ContainerImage = styled.div`
    width: 600px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;



export const FormCar = styled.div`
    width: 350px;
    height: 60px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    
label{
    color: ${textColor};
    margin: 12px 12px 0 0;
}    

input{
    border: none;
    outline: none;
    background-color: ${primaryDarkColor};
    width: 200px;
    height: 50px;
    border-radius: 4px;
    color: #7e7e7e;
    font-size: 1em;
}  
    `;

export const InfosCar = styled.div`
    width: 400px;
    margin: 20px auto;
    


p{
    margin-top:20px;
    color:#c7c7c7;
    font-size: 1rem;
    line-height: 1.5;
    text-align: left;
}  
    

`;

export const WrapperPays = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 400px;
    height: 200px;
    margin: 20px auto;
    justify-content: center;
    align-items: center;


img{
    width: 150px;
    height: 120px;

}    
    `;


export const FormPayment = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    margin: 40px auto;

input{
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
  padding-left: 8px;

}

div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

div > input {
    width: 120px;
    text-align: center;
}
`;