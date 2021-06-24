import styled from "styled-components";
import TextureInvertida from "../../assets/texture/textura-linhas-invertida.png";
import Texture from "../../assets/texture/textura-linhas.png";
import { theme } from "../../theme";

export const GrupoModevSection = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-color: ${theme.primaryBlack};
  background-image: url(${TextureInvertida}), url(${Texture});
  background-repeat: no-repeat;
  background-size: 110%, 110%;
  background-position: center top -410px, center bottom -30rem;
  position: relative;
  @media (max-width: 400px) {
    padding-bottom: 40px;
    background-position: top, center bottom -30rem;
  }
`;
export const Paragrafo = styled.div`
  width: 90%;
  line-height: 1.4rem;
  font-weight: 600;
  font-size: 1.1rem;
  z-index: 1;
  margin-bottom: 3rem;

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
export const Grupo = styled.h2`
  font-size: 9rem;
  color: ${theme.secondaryGray};
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 2.6rem;
  left: -20px;
  opacity: 0.4;
  margin-top: 1em;
  @media (max-width: 360px) {
    letter-spacing: 2rem;
  }
`;

export const Social = styled(Grupo)`
  position: absolute;
  top: 4.8em;
  @media (max-width: 360px) {
    letter-spacing: 2rem;
  }
`;
export const Contato = styled(Grupo)`
  position: absolute;
  top: 11.8em;
  z-index: 0;
  letter-spacing: 1.2rem;
  @media (max-width: 680px) {
  letter-spacing: 0.8rem;
  }
  @media (max-width: 360px) {
    letter-spacing: 0.6rem;
  }
`;

export const Logos = styled.div`
  display: flex;
  width: 90%;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    img{
      :first-of-type{
        width: 14vmin;
      }
      :nth-of-type(2) {
        width: 30vmin;
      }
      :nth-of-type(3) {
        width: 22vmin;
      }
    }
  }
`;

export const InstaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 1rem; 
  div{
    height: 15rem;
    width: 15rem;
    background-color: ${theme.secondaryGray};
    opacity: 0.6;
    transition: 0.45s;
    justify-content: center;
    align-items: center;
    :hover{
      cursor: pointer;
      transform: scale(1.1); 
    }
    :active{
      transform: scale(1.0); 
    }
  }
  span{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 5rem;
  }
`;

export const Button = styled.button`
  width: fit-content;
  height: fit-content;
  outline: none;
  border: none;
  border-radius: 0.6rem;
  font-size: 1.2rem;
  background-color: ${theme.lemonGreen};
  padding: 0.7rem;
  text-transform: uppercase;
  transition: 0.2s;
  :hover{
    cursor: pointer;
    opacity: 0.7;
  }
  :active{
    opacity: 0.4;
    transform: translateY(3px);
  }

`;
export const InfosContato = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  width: 90%;
  margin-bottom: 5rem;
  div{
    height: 10rem;
    :first-of-type{
      width: 40%;
    }
    :nth-of-type(2){
      input {
        border-radius: 0.6rem;
        padding: 0.7rem;
        color: ${theme.secondaryGray};
        width: 100%;
        outline: none;
        border: none;
        font-size: 1.2rem;
        height: 100%;
        margin: auto;
        opacity: 0.7;
      }
      textarea{
        opacity: 0.7;
        border-radius: 0.6rem;
        padding: 0.7rem;
        color: ${theme.secondaryGray};
        width: 100%;
        outline: none;
        border: none;
        font-size: 1.2rem;
        height: 100%;
        margin: auto;
        grid-area: 1 / 3 / 3 / 4;
        resize: none;
      }
      form{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        gap: 1rem;
        height: 8rem;
        justify-content: flex-end;
        span{
          grid-area: 3 / 3 / 4 / 4; 
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          height: 3rem;
        }
      }
      display:flex;
      justify-content: center;
      align-items: center;
    }

    p{
      line-height: 1.4rem;
      padding-right: 0.5rem;
      span{
        color: ${theme.lemonGreen};
        cursor: pointer;
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5rem;
  gap: 3rem;
  img{
    height: 12rem;
  }
  div{
    background-color: ${theme.secondaryGray};
    opacity: 0.6;
    height: 12rem;
    width: inherit; 
  }
`;
export const ByDestileria = styled.p`
    font-size: 1.6rem;
`;