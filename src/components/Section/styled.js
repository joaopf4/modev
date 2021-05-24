import styled from 'styled-components'
import {theme} from "../../theme"

export const SectionContainer = styled.section `
    width: 90%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: ${(props) => props.bgColor};
    margin: 40px 0px;
`
export const SectionGrid = styled.div `
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    width: 100%;
    height: 100%;
    div{
        display: flex;
        align-items: center;
        justify-content: center; 
        background-color:  ${theme.lightOrange};
    }
`