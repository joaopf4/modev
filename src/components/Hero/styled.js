import styled from 'styled-components';
import {theme} from "../../theme";

export const HeroContainer = styled.section `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: ${theme.lightOrange};
    background-image: url(https://static.dezeen.com/uploads/2013/07/dezeen_Zaha-Hadid-and-The-High-Line_ss_1.jpg)!important;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
`;

export const HeroTitle = styled.h1 `
    color: white;
    font-size: 7rem;
    position: absolute;
    right: 10vw;
    z-index: 1;
`