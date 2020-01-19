import { createGlobalStyle } from 'styled-components';

export const minSupportedWidth = 1024;
export const maxSupportedWidth = 1366;

let { innerWidth } = window;
if (innerWidth < minSupportedWidth) {
  innerWidth = minSupportedWidth;
} else if (innerWidth > maxSupportedWidth) {
  innerWidth = maxSupportedWidth;
}
export const scaleFactor = innerWidth / 1366;

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: Arial;
    background-color: ${props => props.theme.color.base_90};
    color: ${props => props.theme.color.base_10};
    font-size: ${props => props.theme.dim._14px};
    margin: 0;
    height: 100%;
    scrollbar-width: none !important;
  }

  * {
    outline: none;
  }

  #root {
    height: 100%;
    min-width: ${minSupportedWidth};
    justify-content: center;
    position: relative;
  }
// ----------------------------->>>>>>>>>FONT<<<<<<<<----------------------------------
// ----------------------------->>>>>>>>>EXTRA<<<<<<<----------------------------------
.baseStyles__BaseModalBackground-sc-12bzkqq-0 {
  background-color: transparent;
}
`;

export default GlobalStyle;