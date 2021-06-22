import styled from "styled-components";
import Texture from "../../assets/texture/textura-linhas-invertida.png";
import { theme } from "../../theme";

export const GrupoModevSection = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-color: ${theme.primaryBlack};
  background-image: url(${Texture});
  background-repeat: no-repeat;
  background-size: 130%;
  background-position: top;
  position: relative;
  @media (max-width: 1290px) {
    background-size: 160%;
  }
  @media (max-width: 400px) {
    padding-bottom: 40px;
    background-attachment: fixed;
    background-repeat: repeat-y;
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
  span {
    color: ${theme.lemonGreen};
  }
`;
export const Grupo = styled.h2`
  font-size: 10rem;
  color: ${theme.secondaryGray};
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 2.6rem;
  left: -20px;
  opacity: 0.5;
  margin-top: 1em;
  @media (max-width: 360px) {
    letter-spacing: 2rem;
  }
`;

export const Social = styled(Grupo)`
  position: absolute;
  top: 3.6em;
  @media (max-width: 360px) {
    letter-spacing: 2rem;
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

export const FollowUs = styled.button`
  width: fit-content;
  height: fit-content;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 1.6rem;
  background-color: ${theme.lemonGreen};
  padding: 0.8rem;
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