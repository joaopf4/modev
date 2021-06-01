import styled from 'styled-components';
import HeroImg from '../../assets/hero/main_full.jpg'
import {theme} from "../../theme";

export const HeroContainer = styled.section `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: ${theme.lightOrange};
    background-image: url(${HeroImg});
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