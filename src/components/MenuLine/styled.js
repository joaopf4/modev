import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const InlineMenu = styled.nav`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: calc(100% - 22vmin);
  transition: all 0.5s ease;
  a {
      display: inline-block;
    li{
      display: inline-block;
      transition: all 0.5s ease;
      font-weight: 600;
      font-size: 1.5rem;
      text-transform: uppercase;
      text-shadow: 1px 2px 12px #000000;
      :hover {
        cursor: pointer;
        color: ${theme.lemonGreen};
        transform: translate(0px, -3px);
      }
    }
      padding: 0.5rem 0.8rem;
      transition: all 0.5s ease;
    @media (min-width: 1270px) {
      :last-of-type{
        margin-right: 4rem;
        padding-right: 0rem;
      }
      :hover {
        cursor: pointer;
        li{
          color: ${theme.lemonGreen};
          transform: translate(0px, 3px);
        }
      }
      :active{
        box-shadow: 0px 0px 0px ${theme.primaryBlack};
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 1270px) {
    height: fit-content;
    width: calc(100% - 22vmin);
    flex-direction: column;
    position: fixed;
    z-index: 4;
    ul {
      margin: 0;
      transition: display 1s;
      padding-left: 0;
      display: grid;
      width: 100%;
      opacity: 0.7;
      background-color: ${theme.primaryBlack};
      transition: all 0.5s ease;
      ${(props) =>
        props.open &&
        css`
        background-color: transparent;
      `};
    }
     a, li {
      margin: 0;
      transform: scaleY(${(props) => (props.open ? "0" : "1")});
      transform-origin: top;
      transition: transform 0.5s ease;
      &:last-child {
        margin-right: 0;
      }
    }
    a{
      transition: all 0.5s ease;
      border-bottom: 2px solid gray;
      :hover {
        cursor: pointer;
        background-color: ${theme.secondaryGray};
        li{
          color: ${theme.lemonGreen};
        }
      }
    }
  }
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 6px auto;
  transition: 0.4s;
  transform: rotate(${(props) => (!props.open ? "-45deg" : "")})
    translate(${(props) => (!props.open ? "-9px, 6px" : "")});
  @media (max-width: 500px) {
    width: 24px;
    height: 4px;
    margin: 16% auto;
    transform: rotate(${(props) => (!props.open ? "-45deg" : "")})
      translate(${(props) => (!props.open ? "-6px,5px" : "")});
  }
`;
export const MenuIcon2 = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 16% auto;
  transition: 0.4s;
  opacity: ${(props) => (!props.open ? "0" : "1")};
  @media (max-width: 500px) {
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
  transform: rotate(${(props) => (!props.open ? "45deg" : "")})
    translate(${(props) => (!props.open ? "-8px, -8px" : "")});
  @media (max-width: 500px) {
    width: 24px;
    height: 4px;
    transform: rotate(${(props) => (!props.open ? "45deg" : "")})
      translate(${(props) => (!props.open ? "-5px, -8px" : "")});
  }
`;

export const HambIcon = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px 15px;
  margin-right: 4rem;
  background-color: white;
  opacity: 0.3;
  top: -60px;
  transition: 0.4s;
  ${(props) =>
    props.open &&
    css`
      opacity: 0.7;
    `}
  :hover {
    background-color: rgb(255 255 255 / 70%);
  }
  @media (max-width: 1270px) {
    display: block;
    position: fixed;
    top: 2.7rem;
    z-index: 4;
  }
  @media (max-width: 500px) {
    padding: 7.3px 10px;
  }
`;
