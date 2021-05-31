import styled from 'styled-components'
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import {theme} from './theme'

const Body = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <Body>
      <Header/>
      <Hero bgColor={theme.lowpacityBlue}/>
      <Section/>

    </Body>
  );
}

export default App;
