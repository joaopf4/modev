import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const NavColumn = styled.nav `
  height: fit-content;
  background-color: transparent;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  ${ props => props.open && css `
    opacity: 1;
    visibility: visible;
  `};
  position: fixed;
  right: 0px;
  margin: 7.3rem 3rem; 
  padding: 1rem 2rem;
  border-bottom: ${theme.lightBlue};
  ul {
    max-width: 100%;
    height: 100%;
    color: white;
    list-style: none;
    padding: 0;
    li {
      margin: 1.5rem 0rem;
      padding: 0.7rem;
      border-bottom: 1px solid ; 
      transition:  0.4s;
      :hover{
        cursor: pointer;
        opacity: 1;
        box-shadow:  ${theme.boxShadow};
        border-radius: 10px;
        padding: 0.75rem;
      }
    }
  }
`
