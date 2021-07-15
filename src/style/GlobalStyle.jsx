import {createGlobalStyle} from 'styled-components'
import {LightColor} from './Colors'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: 'Roboto', sans-serif;
}

body{
  background: ${LightColor};
  font-size: 16px;
}

`;