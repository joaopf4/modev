import { GrupoModevSection, Grupo, Social, Title, Logos, Paragrafo, InstaGrid, FollowUs } from "./styled";
import ModevLogo from "../../assets/logos/logo-MODEV-branco.png";
import VertazLogo from "../../assets/logos/logo-VERTAZ-branco.png";
import LexaLogo from "../../assets/logos/logo-lexa-branco.png";

function GrupoModev({ id, bgColor }) {
  return (
    <GrupoModevSection id={id} bgColor={bgColor}>
      <Grupo>Grupo</Grupo>
      <Title>Grupo <span>Modev</span></Title>
        <Paragrafo>
          <p>
          Phasellus molestie quam tortor, nec   cursus. Phasellus molestie quam tortor, nec   cursus Phasellus molestie quam tortor, nec   cursus . Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur interdum, era, sem massa imperdiet eros, in rhoncus nullna in diam. Nam facilisis ac nisl et dapibus. Maecenas orci augue. Pellentesque finibus suscipit suscipit. In hac habitasse platea. Duis arcu a  aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur interdum, era, sem massa imperdiet.
          </p>
        </Paragrafo>
      <Logos>

          <img alt="ModevLogo" src={ModevLogo}/>

          <img alt="VertazLogo" src={VertazLogo}/>

          <img alt="LexaLogo" src={LexaLogo}/>

      </Logos>
      <Title>Nossas <span>Redes</span></Title>
      <Social>Social</Social>
      <InstaGrid>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <span></span>
        <span></span>
        <span>
          <FollowUs>
            Nos siga!
          </FollowUs>
        </span>
      </InstaGrid>



    </GrupoModevSection>
  );
}

export default GrupoModev;
