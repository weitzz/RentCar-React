import styled from 'styled-components'
import {LightColor,primaryDarkColor} from '../../style/Colors'




export const CatalogContent = styled.div`
    max-width: 1000px;
    min-width: 300px;
    height: auto;
    position: relative;
    z-index: 10;
    margin: 0 auto;

`;



export const FilterCard = styled.div`
    max-width: 980px;
    width: 100%;
    height: 150px;
    background: ${primaryDarkColor};
    border-radius: 8px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    width: 700px;
    height: 50px;
    border: none;
    border-radius:  4px 0 0 4px;
    text-indent: 10px;
    background-color:${LightColor};
    font-size:1.1rem;
    color:#f7f7f7;
`;
export const CardWrapper = styled.div`
    max-width: 1000px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill ,minmax(300px,1fr));
    grid-gap: 20px;
    padding: 30px;
   
`;

export const CardItem = styled.div`
    height: 400px;
    background: ${primaryDarkColor};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    transition: transform 0.2s;

    &hover{
    transform: translateY(10px);
    
}
   
`;
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    text-align: left;
    position: absolute;
    top: 8%;
    left: 8%;


`;

export const ImgContent  = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 5%;

`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
export const CardContent = styled.div`
    height: 8%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    text-align: left;
    position: absolute;
    bottom: 21%;
    left: 10%;

    

`;



