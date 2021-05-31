import styled from "styled-components";
import { theme } from "../../theme";

export const InlineMenu = styled.nav`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  ul {
    list-style: none;
    margin: 0;
    li {
        display: inline;
        justify-content: center;
        align-items: center;
        padding: 1.2rem;
        font-size: 1.7rem;
        :hover{
            cursor: pointer;
            opacity: 1;
            box-shadow:  ${theme.boxShadow};
            border-radius: 10px;
      }
    }
  }
  @media(max-width: 900px){
    display: none;
  }
`;
