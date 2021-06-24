import { HeroContainer, HeroTitle, HeroText} from './styled'

function Hero({id}) {

  return (
    <HeroContainer id={id}>
        <HeroTitle id="inicio">
          Título do Banner
        </HeroTitle>
        <HeroText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </HeroText>
    </HeroContainer>
  );
}

export default Hero;