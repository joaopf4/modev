import styled from "styled-components";
import Texture from "../../assets/texture/textura-linhas.png";
import { theme } from "../../theme";

export const AboutUsSection = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 3rem 5rem 3rem;
  background-color: ${theme.primaryBlack};
  background-image: url(${Texture});
  background-repeat: no-repeat;
  background-size: 130%;
  background-position: top;
  @media (max-width: 1290px) {
    background-size: 160%;
  }
  @media (max-width: 400px) {
    background-attachment: fixed;
    background-repeat: repeat-y;
  }
`;
export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3.6rem;
  z-index: 1;
  margin-top: 5rem;
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
  opacity: 0.4;
  margin-top: 1em;
`;

export const Grid = styled.div`
  display: grid;
  width: 90%;
  height: 60%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 3rem;
  z-index: 1;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    height: fit-content;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    line-height: 1.4rem;
    font-weight: 600;
    font-size: 1.1rem;
    :nth-of-type(2) {
      justify-content: space-between;
    }
    :nth-of-type(3) {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      @media (max-width: 1300px) {
        display: none;
      }
    }
    span {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-transform: uppercase;
      font-size: 1.6rem;
      @media (max-width: 1300px) {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 2vw 0px 2vw 0px;
      }
      p {
        margin: 0.4rem 0;
        @media (max-width: 1300px) {
          margin: 0.4rem 0 0.4rem 0.8rem;
        }
      }
      img {
        width: 4.4rem;
      }
    }
  }
`;
