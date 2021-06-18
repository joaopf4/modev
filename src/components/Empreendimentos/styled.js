import styled from "styled-components";
import { theme } from "../../theme";

export const EmpreendimentosSection = styled.section`
  width: 100%;
  height: fit-content;
  min-height: 70vh;
  background-color: ${theme.primaryBlack};
  @media (max-width: 1290px) {
    background-size: 160%;
  }
  @media (max-width: 400px) {
  }
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    @media (max-width: 800px) {
      grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }
`;

export const Card = styled.div`
  width: auto;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2vmin;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #abdfa3;
  background-blend-mode: multiply;
  background-position: center;
  transition-duration: 0.5s;
  :hover{
    background-color: white;
    transform: translateY(-10px);
    cursor: pointer;
  }
  &:hover img{
    /* display: block; */
    opacity: 0.6;
  }
  &:active img{
    transform: translateY(10px);
    transition-duration: 0.5s;
  }
  img{
    transition: .5s;
    width: 35%;
    align-self: center;
    position: relative;
    top: -30%;
    opacity: 0;
    /* display: none; */
  }
  p{
    margin-top: 0;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.6rem;
    :first-of-type{
      margin-bottom: 5px;
    }
  }
`;