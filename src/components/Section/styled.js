import styled from 'styled-components'
import {theme} from "../../theme"

export const SectionContainer = styled.section `
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: ${(props) => props.bgColor};
    margin: 40px 0px;
`
export const SectionGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    width: 100%;
    height: 100%;
    cursor: pointer;

    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center; 
        background-color:  ${theme.lightOrange};
        transition: transform 1s;
        :hover{
            transform: translateY(-10px);
        }
        img {
            width: 100%;
        }
        strong {
            padding: 1rem;
        }
    }
`