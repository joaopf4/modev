import styled from "styled-components";
import { theme } from "../../theme";

export const MenuBox = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  position: fixed;
  right: 0px;
  margin: 18px 30px;
  box-shadow: ${theme.boxShadow};
  align-items: center;
  justify-content: space-around;
  background-color: white;
  opacity: 0.75;
  @media(max-width: 600px){
    width: 50px;
    height: 50px;
  }
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 6px auto;
  transition: 0.4s;
  z-index: 1;
  transform: rotate(${(props) => (props.open ? "-45deg" : "")})
    translate(${(props) => (props.open ? "-9px, 6px" : "")});
`;
export const MenuIcon2 = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 6px auto;
  transition: 0.4s;
  z-index: 1;
  opacity: ${(props) => (props.open ? "0" : "1")};
`;
export const MenuIcon3 = styled.div`
  width: 30px;
  height: 5px;
  background-color: #333;
  margin: 6px auto;
  transition: 0.4s;
  transform: rotate(${(props) => (props.open ? "45deg" : "")})
    translate(${(props) => (props.open ? "-8px, -8px" : "")});
`;

export const HambIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 10px 15px;
  z-index: 1;
  :hover {
    background-color: ${theme.mediumpacityBlue};
    color: white;
  }
  :active {
    background-color: ${theme.lowpacityBlue};
    color: white;
  }
  @media(max-width: 900px){
    
  }
`;

export const Header = styled.header`
  width: 100%;
  position: fixed;
  box-shadow: 0px 1px 10px #aaaaaa;
  background-color: transparent;
  height: 116px;
`;
