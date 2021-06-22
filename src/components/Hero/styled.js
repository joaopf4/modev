import styled from "styled-components";
import HeroImg from "../../assets/hero/main_full.jpg";
import { theme } from "../../theme";

export const HeroContainer = styled.section`
  width: calc(100% - 22vmin);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-right: 4rem;
  justify-content: center;
  align-items: flex-end;
  background-color: ${theme.primaryBlack};
  background-image: url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  align-self: flex-end;
  word-wrap: break-word;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 4rem;
  /* position: absolute; */
  margin-bottom: .5rem;
  margin-top: .5rem;
  text-align: right;
  text-transform: uppercase;
`;

export const HeroText = styled.h3`
    text-align: right;
    width: 70%;
    font-size: 1.1rem;

`