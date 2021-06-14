import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const InlineMenu = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
      display: inline;
      font-weight: 600;
      padding: 0.4rem;
      margin: 1rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      text-shadow: 1px 2px 12px #000000;;
      :hover{
          cursor: pointer;
          background-color: ${theme.secondaryGray};
    }
  }

  @media(max-width: 900px){
    height: fit-content;
    width: 100%;
    flex-direction: column;
    transition: background-color 1s, visibility 1s, opacity 2.5s linear;
  ${ props => props.open && css `
    opacity: 1;
    visibility: visible;
  `};
      visibility: ${(props) => (props.open ? "hidden" : "visible")};
    ul {
      margin: 0;
      padding-left: 0;
      display: ${(props) => (props.open ? "none" : "grid")};
      width: 100%;
      opacity: 0.7;
      background-color: ${theme.primaryBlack};
    }
    li {
      border-bottom: 2px solid gray;
      margin: 0;
    }
  }
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 6px auto;
  transition: 0.4s;
  transform: rotate(${(props) => (!(props.open) ? "-45deg" : "")})
    translate(${(props) => (!(props.open) ? "-9px, 6px" : "")});
`;
export const MenuIcon2 = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 16% auto;
  transition: 0.4s;
  opacity: ${(props) => (!(props.open) ? "0" : "1")};
`;
export const MenuIcon3 = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 16% auto;
  transition: 0.4s;
  transform: rotate(${(props) => (!(props.open) ? "45deg" : "")})
    translate(${(props) => (!(props.open) ? "-8px, -8px" : "")});
`;

export const HambIcon = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px 3rem 10px 15px;
  @media(max-width: 900px){
    display: block;
    position: absolute;
  }
`;
