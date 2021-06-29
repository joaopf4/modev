import React from 'react';
import { HeroContainer, HeroTitle, HeroText} from './styled'
import SimpleImageSlider from "react-simple-image-slider";
import HeroImg1 from "../../assets/hero/main_large.jpg";
import HeroImg2 from "../../assets/hero/AEREA_04.jpg";
import HeroImg3 from "../../assets/hero/fachada_imperatriz.jpg";


const images = [
  { url: HeroImg1 },
  { url: HeroImg2 },
  { url: HeroImg3 },
];

function Hero() {

  return (
    <HeroContainer>
      <SimpleImageSlider
        style={{}}
        width={'100%'}
        height={'100%'}
        images={images}
        showBullets
        slideDuration={0.4}
        bgColor={'#282828'}
        // opacity={0.7}
      >
      </SimpleImageSlider>
      <span>
        <HeroTitle id="inicio">
          Título do Banner
        </HeroTitle>
        <HeroText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </HeroText>
      </span>

    </HeroContainer>
  );
}

export default Hero;