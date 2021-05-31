import styled from "styled-components";
import { theme } from "../../theme";

export const Menu = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  position: fixed;
  right: 0px;
  margin: 18px 30px;
  box-shadow: ${theme.boxShadow};
  align-items: center;
  justify-content: space-around;
  background-color: white;
  opacity: 0.75;
  display: none;
  @media(max-width: 900px){
    width: 50px;
    height: 50px;
    display: flex;
  }
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 6px auto;
  transition: 0.4s;
  transform: rotate(${(props) => (props.open ? "-45deg" : "")})
    translate(${(props) => (props.open ? "-9px, 6px" : "")});
`;
export const MenuIcon2 = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 16% auto;
  transition: 0.4s;
  opacity: ${(props) => (props.open ? "0" : "1")};
`;
export const MenuIcon3 = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 16% auto;
  transition: 0.4s;
  transform: rotate(${(props) => (props.open ? "45deg" : "")})
    translate(${(props) => (props.open ? "-8px, -8px" : "")});
`;

export const HambIcon = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px 15px;
  @media(max-width: 900px){
    display: inline-block;
  }
`;
