import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import SPMedWoff2 from '../fonts/SPM.woff2.cast5';
import SPMedWoff from '../fonts/SPM.woff.cast5';
import SPLightWoff2 from '../fonts/SPL.woff2.cast5';
import SPLightWoff from '../fonts/SPL.woff.cast5';

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  @font-face {
    font-family: 'SP';
    font-weight: 700;
    font-style: normal;
    font-display: block;
    unicode-range: U+000-5FF;
    src:
      url(${SPMedWoff2}) format('woff2'),
      url(${SPMedWoff}) format('woff');
  }

  @font-face {
    font-family: 'SP';
    font-weight: 400;
    font-style: normal;
    font-display: block;
    unicode-range: U+000-5FF;
    src:
      url(${SPLightWoff2}) format('woff2'),
      url(${SPLightWoff}) format('woff');
  }
  
  body {
    color: black;
    font-family: SP, 'Gill Sans', Helvetica, Arial, sans-serif;
    letter-spacing: 0.1px;
    font-weight: 400;
    font-size: 1rem;
    background-color: #f4f4f4;
  }

  /* h1 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.8rem;
    margin: 0;
  } */

  /* h2 {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.8rem;
    margin: 0;
  } */
`;

export default GlobalStyles;
