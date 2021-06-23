import { GrupoModevSection, Grupo, Social, Contato, ByDestileria, Title, Footer, Logos, Paragrafo, InstaGrid, Button, InfosContato } from "./styled";
import ModevLogoBranco from "../../assets/logos/logo-MODEV-branco.png";
import ModevLogo from "../../assets/logos/logo-MODEV.png";
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

          <img alt="ModevLogo" src={ModevLogoBranco}/>

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
          <Button>
            Nos siga!
          </Button>
        </span>
      </InstaGrid>
      <Title>Mande uma  <span>mensagem</span></Title>
      <Contato>CONTATO</Contato>
      <InfosContato>
        <div>
          <p>
            +55 (15) 9 9999.9999<br/>
            +55 (15) 9 9999.9999<br/>
            <span>info@modev.com.br<br/></span>
            Rua São João das Rosas,
            Centro, Campinas<br/>
            São Paulo - Brasil<br/>
          </p>
        </div>

        <div>
          <form>
            <input placeholder="NOME*"/>
            <input placeholder="E-MAIL*"/>
            <input placeholder="TELEFONE"/>
            <input placeholder="EMPRESA"/>
            <textarea placeholder="MENSAGEM*"/>
            <span>
              <Button>Enviar</Button>
            </span>
          </form>
        </div>

      </InfosContato>
      <Footer>
        <img src={ModevLogo} alt="Modev"/>
        <div></div>
      </Footer>

      <ByDestileria>by DESTILERIA DE IDEIAS</ByDestileria>
      

    </GrupoModevSection>
  );
}

export default GrupoModev;
