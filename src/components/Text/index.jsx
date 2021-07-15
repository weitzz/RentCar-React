import styled from 'styled-components'
import {detailColor,textColor} from '../../style/Colors'



export const SectionTitle = styled.div`
     margin-top: 200px;
     padding-bottom: 20px;

`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 2.2rem;
    color: ${textColor};
    margin-bottom: 20px;
    text-align: left;
    transform: translateX(-20px);
    transition: transform 0.5s;
`;
export const Paragraph = styled.p`
    color:${detailColor};
    max-width: 300px;
    text-align: left;
    transform: translateX(-20px);
    transition: transform 0.4s;
    font-size: 1.3rem;
`;


export const TitleSection = styled.h2`
    color: ${textColor};
    font-size:2rem;
    font-weight: 400;
`;

export const ParagraphSection = styled.p`
    color:#c7c7c7;
    font-size: 1rem;

`;


export const TitleCard = styled.h2`
    width: 95%;
    color: ${textColor};

`;

export const ParagraphCard = styled.p`
    width: 90%;
    color: #c7c7c7;
    //font-style: italic;

`;


export const Span = styled.span`
    color: #c7c7c7;
    width: 85%;
    font-style: italic;

`;
export const Small = styled.small`
    color: #c7c7c7;
`;

