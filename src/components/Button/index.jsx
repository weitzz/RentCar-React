import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
//import {Link as LinkS} from 'react-scroll'
import {detailColor,textColor} from '../../style/Colors'

const handleVariant = (variant) => {
    switch (variant) {
    case 'primary':
      return `color: ${textColor}; background-color: ${detailColor}`
       
      case 'secondary':
      return `color: ${textColor}; background-color: ${detailColor}; width: 88%; margin:0 auto;`;
        
      default:
      return `color: ${textColor}; background-color: ${detailColor}`
    }
  };



 const Btn = styled(LinkR)`
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
${({ variant }) => handleVariant(variant)}


&:hover{
color: ${(props) => (props.variant === 'primary' ? `${detailColor}` : `${detailColor}`)};;
background: ${props => (props.variant === 'primary' ? 'transparent' : 'transparent')};
font-weight: ${props => (props.variant === 'primary' ? 500 : 500)};


}    
`;




const Button = ({variant,children}) => {
    return (
        <Btn variant={variant} type="submit"> 
          {children}</Btn>
    )
}

export default Button
