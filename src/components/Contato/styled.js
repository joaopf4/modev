import styled from "styled-components";
import Texture from "../../assets/texture/textura-linhas.png";
import { theme } from "../../theme";

export const ContatoSection = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-color: ${theme.primaryBlack};
  background-image: url(${Texture});
  background-repeat: no-repeat;
  background-size: 130%;
  background-position: bottom;
  @media (max-width: 1290px) {
    background-size: 160%;
  }
  @media (max-width: 400px) {
    /* background-attachment: fixed; */
    background-repeat: repeat-y;
  }
`;
export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3.2rem;
  z-index: 1;
  span {
    color: ${theme.lemonGreen};
  }
`;

export const Sobre = styled.h2`
  font-size: 10rem;
  color: ${theme.secondaryGray};
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 2.6rem;
  left: -20px;
  opacity: 0.5;
  margin-top: 1em;
`;
