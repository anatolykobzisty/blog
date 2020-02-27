import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  
  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul,
  ol,
  li {
    display: block;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
