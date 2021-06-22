import styled from "styled-components";
import { theme } from "../../theme";

export const SideBarDiv = styled.div`
  height: 100vh;
  background-color: ${theme.primaryBlack};
  position: absolute;
  left: 0;
  width: 22vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 0.8rem 3rem 0.8rem;
  img {
    width: 100%;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: fit-content;

`;
export const IconLinks = styled.a`
  i {
    color: ${theme.secondaryGray};
    :hover {
    color: ${theme.secondaryGray}de;
    }
  } 
  font-size: 4vmin;
  margin: 10px;
  display: flex;
  justify-content: center;
  :hover {
    text-decoration: none;
    cursor: pointer;
  }
  :active {
    transform: translateY(3px);
    transition: 0.15s;
  }
  @media(max-width: 600px){
    font-size: 3rem;
  }
`;
