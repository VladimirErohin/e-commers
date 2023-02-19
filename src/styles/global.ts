import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`

     @font-face {
       font-family: 'harmondextra_bold_expanded';
       src: url('/fonts/harmond-extraboldexpanded-webfont.woff2') format('woff2'),
       url('/fonts/harmond-extraboldexpanded-webfont.woff') format('woff');
       font-weight: normal;
       font-style: normal;
     };

     @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600&family=Manrope:wght@200&display=swap');*/
     @import url(
     'https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&family=Libre+Franklin:wght@300;400;500;600&family=Manrope:wght@200&display=swap'*/
     );
`;

export default FontStyles;

// link to article for global fonts https://www.clairecodes.com/blog/2021-02-01-font-face-and-styled-components/