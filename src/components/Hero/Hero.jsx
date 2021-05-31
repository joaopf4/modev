import { HeroContainer, HeroTitle} from './styled'

function Hero({id}) {

  return (
    <HeroContainer id={id}>
      <HeroTitle>
        Hero
      </HeroTitle>
    </HeroContainer>
  );
}

export default Hero;