import styled from 'styled-components'
import Menu from './components/Menu';
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
      <Menu/>
      <Hero bgColor={theme.lowpacityBlue}/>
      <Section/>
      <Section/>
    </Body>
  );
}

export default App;
