import styled from "styled-components";
import { theme } from "../../theme";

export const SideBarDiv = styled.div`
  height: 100vh;
  background-color: ${theme.primaryBlack};
  position: absolute;
  left: 0;
  width: 34vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px 0px 20px;
  img {
    width: 100%;
    /* min-width: 100px; */
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
  font-size: 6vmin;
  margin: 10px;
  :hover {
    text-decoration: none;
    cursor: pointer;
  }
  :active {
    transform: translateY(3px);
    transition: 0.15s;
  }
  @media (max-height: 440px) {
    /* font-size: 1.9rem; */
  }
`;
