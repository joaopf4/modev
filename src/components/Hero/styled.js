import styled from "styled-components";
import HeroImg from "../../assets/hero/main_full.jpg";
import { theme } from "../../theme";

export const HeroContainer = styled.section`
  width: calc(100% - 20vmin);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-right: 5vw;
  justify-content: center;
  align-items: flex-end;
  background-color: ${theme.lightOrange};
  background-image: url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  align-self: flex-end;
  word-wrap: break-word;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 6rem;
  /* position: absolute; */
  margin-bottom: .5rem;
  margin-top: .5rem;
  text-align: right;
  text-transform: uppercase;
  @media (max-width: 1290px) {
    font-size: 5rem;
  }
  @media (max-width: 1160px) {
    font-size: 4rem;
  }
  @media (max-width: 1040px) {
    font-size: 3rem;
  }
  @media (max-width: 870px) {
    font-size: 2rem;
  }
`;

export const HeroText = styled.h3`
    text-align: right;
    width: 70%;
`