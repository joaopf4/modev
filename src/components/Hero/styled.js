import styled from "styled-components";
import HeroImg from "../../assets/hero/main_full.jpg";
import { theme } from "../../theme";

export const HeroContainer = styled.section`
  width: calc(100% - 22vmin);
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-right: 4rem;
  justify-content: center;
  overflow: hidden;
  align-items: flex-end;
  background-color: ${theme.primaryBlack};
  /*background-image: url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top; */
  align-self: flex-end;
  /* opacity: .8; */
  word-wrap: break-word;
  z-index: 0;
  div{
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-blend-mode: lighten; 
    div{
      opacity: 0.9;
    }
  }
  span{
    :last-of-type{
      position: absolute;
      width: calc(100% - 22vmin);
      top: 35%;
      height: fit-content;
      z-index: 0;
    }
  }
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 4rem;
  /* position: absolute; */
  margin-bottom: .5rem;
  /* top: 30%; */
  margin-top: .5rem;
  text-align: right;
  text-transform: uppercase;
`;

export const HeroText = styled.p`
    /* top: 40%; */
    text-align: right;
    /* width: 70%; */
    font-size: 1.4rem;
    /* position: absolute; */

`