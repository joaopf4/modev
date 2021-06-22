import styled from 'styled-components'
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import GrupoModev from '../../components/GrupoModev';
import Empreendimentos from '../../components/Empreendimentos';
// import Section from '../../components/Section';
import {theme} from '../../theme'

const Body = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Home() {
  return (
    <Body>
      <SideBar />
      <Header/>
      <Hero bgColor={theme.primaryBlack}/>
      <AboutUs />
      <Empreendimentos />
      <GrupoModev />
      <br/>
      <br/>
      <br/>
      {/* <Section/> */}
    </Body>
  );
}

export default Home;
