import styled from "styled-components";
import Texture from "../../assets/texture/textura-linhas.png";
import { theme } from "../../theme";

export const AboutUsSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: ${theme.primaryBlack};
  background-image: url(${Texture});
  background-repeat: no-repeat;
  background-size: 130%;
  background-position: top;
  @media (max-width: 1290px) {
    background-size: 160%;
  }
`;
export const Title = styled.h1`
  margin-top: 100px;
  text-transform: uppercase;
  font-size: 3.6rem;
  span {
    color: ${theme.lemonGreen};
  }
`;

export const Sobre = styled.h2`
  font-size: 11rem;
  color: ${theme.secondaryGray};
  position: absolute;
  left: -20px;
  opacity: 0.6;
  @media (max-width: 900px) {
    font-size: 8rem;
  }
  @media (max-width: 600px) {
    font-size: 5rem;
  }
  @media (max-width: 400px) {
    font-size: 4rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  width: 80%;
  height: 60%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 60px;
  z-index: 1;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    font-weight: 600;
    font-size: 1vw;
    :nth-of-type(2) {
      justify-content: space-between;
    }
    :nth-of-type(3) {
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    span {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-transform: uppercase;
      font-size: 2rem;
      p{
          margin: 12px 0;
        }
      img {
        width: 70px;
      }
    }
  }
`;
