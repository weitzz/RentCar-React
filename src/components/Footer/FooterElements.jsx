import styled from 'styled-components'
import {FaFacebook,FaInstagram}  from "react-icons/fa"
import {detailColor,textColor,LightColor} from '../../style/Colors'

export const FooterContent = styled.footer`
    width: 100%;
    height: 300px;
`;

export const Main = styled.div`
    width: 100%;
    height: 250px;
    background: ${detailColor};
    padding: 20px 10px;

`;

export const ContentFooterLinks = styled.div`
    max-width: 1000px;
    min-width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:20px auto;

`;

export const FooterCompany = styled.div`
     color: ${textColor};
    height: 100%;
    min-height: 100px;
    h3{
        margin-bottom: 10px;
    }
    p{
        margin-top: 5px;
    }
`;

export const FooterRental = styled.div`
    color: ${textColor};
    height: 100%;
    min-height: 100px;
    h3{
        margin-bottom: 10px;
    }
    p{
        margin-top: 5px;
    }
`;

export const FooterContact = styled.div`
    color: ${textColor};
    height: 100%;
    min-height: 100px;
    h3{
        margin-bottom: 10px;
    }
    p{
        margin-top: 5px;
    }
`;

export const FooterSocial = styled.div`
    color: ${textColor};
    height: 100%;
    min-height: 100px;
    h3{
        margin-bottom: 10px;
    }
`;
export const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Facebook = styled(FaFacebook)`
    color: ${textColor};
    font-size: 2rem;
    margin: 10px;
    transition: 0.8s ease ;
    &:hover{
        color: ${LightColor};
    }
`;


export const Instagram = styled(FaInstagram)`
    color: ${textColor};
    font-size: 2rem;
    margin: 10px;
    transition: 0.8s ease ;
    &:hover{
        color: ${LightColor};
    }
`;
export const FooterLast = styled.div`
    color: ${textColor};
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
