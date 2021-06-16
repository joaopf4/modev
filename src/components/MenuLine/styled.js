import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const InlineMenu = styled.nav`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: calc(100% - 20vmin);
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
          color: ${theme.lemonGreen};
          transform: translate(0px, -3px);
    }
    &:last-child {
      margin-right: 5vw;
      padding-right: 0;
    }
  }

  @media(max-width: 1270px){
    height: fit-content;
    width: calc(100% - 20vmin);
    flex-direction: column;
    ul {
      margin: 0;
      transition: display 1s;
      padding-left: 0;
      display: grid;
      width: 100%;
      opacity: 0.7;
      background-color: ${theme.primaryBlack};
      transition: all 0.5s ease;
      ${ props => props.open && css `
        background-color: transparent;
      `};
    }
    li {
      border-bottom: 2px solid gray;
      margin: 0;
      transform: scaleY(${props => props.open ? "0" : "1"});
      transform-origin: top;
      transition: transform 0.5s ease; 
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
  @media(max-width: 500px){
  width: 24px;
  height: 4px;
  margin: 16% auto;
  transform: rotate(${(props) => (!(props.open) ? "-45deg" : "")})
  translate(${(props) => (!(props.open) ? "-6px,5px" : "")});
  }
`;
export const MenuIcon2 = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 16% auto;
  transition: 0.4s;
  opacity: ${(props) => (!(props.open) ? "0" : "1")};
  @media(max-width: 500px){
    width: 24px;
    height: 4px;
  }
`;
export const MenuIcon3 = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 16% auto;
  transition: 0.4s;
  transform: rotate(${(props) => (!(props.open) ? "45deg" : "")})
  translate(${(props) => (!(props.open) ? "-8px, -8px" : "")});
  @media(max-width: 500px){
    width: 24px;
    height: 4px;
    transform: rotate(${(props) => (!(props.open) ? "45deg" : "")})
     translate(${(props) => (!(props.open) ? "-5px, -8px" : "")});
  }
`;

export const HambIcon = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px 15px;
  margin-right: 3rem;
  /* background-color: transparent; */
  background-color: white;
  opacity: 0.3;
  top: -60px;
  transition: opacity 0.4s;
  ${ props => props.open && css `
  transition: opacity 0.4s;
  opacity: 0.7;
  `}
  @media(max-width: 1270px){
    display: block;
    position: absolute;
  }
  @media(max-width: 500px){
    padding: 3.3px 10px;
  }
`;
