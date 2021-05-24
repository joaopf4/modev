import styled from 'styled-components'
import {theme} from "../../theme"

export const HeroContainer = styled.section `
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: ${theme.lightOrange};
`