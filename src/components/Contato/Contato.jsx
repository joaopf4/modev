import { ContatoSection, Sobre, Title } from "./styled";

function Contato({ id, bgColor }) {
  return (
    <ContatoSection id={id} bgColor={bgColor}>
      <Sobre>Contato</Sobre>
      <Title>Mande uma  <span>mensagem</span></Title>
     
    </ContatoSection>
  );
}

export default Contato;
