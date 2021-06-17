import styled from "styled-components";
import Texture from "../../assets/texture/textura-linhas.png";
import { theme } from "../../theme";

export const AboutUsSection = styled.section`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
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
  @media (max-width: 400px) {
    padding-bottom: 40px;
    background-attachment: fixed;
    background-repeat: repeat-y;
  }
`;
export const Title = styled.h1`
  margin-top: 100px;
  text-transform: uppercase;
  font-size: 3.6rem;
  z-index: 1;
  @media (max-width: 600px) {
    font-size: 3rem;
    margin: 50px 0 20px 0;
  }
  @media (max-width: 400px) {
    font-size: 2.4rem;
  }
  span {
    color: ${theme.lemonGreen};
  }
`;

export const Sobre = styled.h2`
  font-size: 11rem;
  color: ${theme.secondaryGray};
  position: absolute;
  left: -20px;
  opacity: 0.5;
  @media (max-width: 900px) {
    margin-top: 1.8em;
    font-size: 8rem;
  }
  @media (max-width: 600px) {
    margin-top: 2.4em;
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
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 40px;
    height: fit-content;
  }
  @media (max-width: 600px) {
    gap: 20px;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    font-weight: 600;
    font-size: 1vw;
    @media (max-width: 1200px) {
      font-size: 0.9rem;
    }
    :first-of-type {
      p {
        @media (max-width: 400px) {
          font-size: 0.8rem;
        }
      }
    }
    :nth-of-type(2) {
      justify-content: space-between;
    }
    :nth-of-type(3) {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      @media (max-width: 1200px) {
        display: none;
      }
    }
    span {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-transform: uppercase;
      font-size: 2rem;
      @media (max-width: 1200px) {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 2vw 0px 2vw 0px;
      }
      @media (max-width: 600px) {
        font-size: 1.5rem;
      }
      @media (max-width: 400px) {
        font-size: 1rem;
      }
      p {
        margin: 12px 0;
        @media (max-width: 1200px) {
          margin: 12px 0 12px 22px;
        }
      }
      img {
        width: 70px;
        @media (max-width: 1200px) {
          width: 65px;
        }
        @media (max-width: 600px) {
          width: 55px;
        }
        @media (max-width: 400px) {
          width: 40px;
        }
      }
    }
  }
`;
