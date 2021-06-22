import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap');


  html{
    font-size: 20px; 
    @media (max-width: 1200px) {
      font-size: 16px; 
    }
    @media (max-width: 900px) {
      font-size: 12px; 
    }
    @media (max-width: 600px) {
      font-size: 8px; 
    }
    @media (max-width: 400px) {
      font-size: 6px; 
    }
    @media (max-width: 30px) {
      font-size: 4px; 
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: white;
    width: 100%;
    overflow-y: overlay; 
    padding-left: 0px !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    color: white;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const theme = {
  secondaryGray: "#5a5a5a",
  primaryBlack: "#282828",
  mediumpacityBlue: "rgba(0, 67, 108, 0.64)",
  lemonGreen: "#83e972",
  darkBlue: "#012940",
  lightBlue: "#4ea4d9",
  lightOrange: "#f3d7b6",
  orange: "#f2b33e",
  jeans: "#5b83a6",
  creamWhite: "#f2f2f2",
  boxShadow: "0px 1px 10px #aaaaaa;",
};

export default GlobalStyle;
