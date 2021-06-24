import { AboutUsSection, Sobre, Title, Grid } from "./styled";
import Empreendimentos from "../../assets/icones/predios.png";
import Acabamentos from "../../assets/icones/gancho.png";
import Apartamentos from "../../assets/icones/planta.png";
import Vista from "../../assets/hero/sobre_nos.png";

function AboutUs({ id, bgColor }) {
  return (
    <AboutUsSection id={id} bgColor={bgColor}>
      <Sobre>SOBRE</Sobre>
      <Title id="sobreNos">Sobre <span>nós</span></Title>
      <Grid>
        <div>
          <p>
          Lorem ipsum dolor, consectetur. Etiam enim lorem, imperdiet congue, congu. Donec at arcu at odio ac quis. Etiam egestas vitae quam placerat facilisis. Nullam vitae arcu ac nunc. In gravida risus magna, tellus eleifend sed. Donec vel arcu. Donec diam ex, convallis eget nunc vel, aliquam venenatis lorem. Ut ac malesuada enim, nec efficitur velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris consectetur odio magna, at sollicitudin augue fermentum eget. Etiam lacinia nisi vel orci convallis, sit amet interdum magna sollicitudin.
          <br/><br/>
          Phasellus molestie quam tortor, nec   cursus . Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur interdum, era, sem massa imperdiet eros, in rhoncus nullna in diam. Nam facilisis ac nisl et dapibus. Maecenas orci augue. Pellentesque finibus suscipit suscipit. In hac habitasse platea. Duis arcu a  aliquet.
          </p>
        </div>
        <div>
          <span>
           <img alt="Empreendimentos" src={Empreendimentos}/>
           <p>Empreendimentos</p>
          </span>
          <span>
           <img alt="Acabamentos" src={Acabamentos}/>
           <p>Acabamentos</p>
          </span>
          <span>
           <img alt="Apartamentos" src={Apartamentos}/>
           <p>Apartamentos</p>
          </span>
        </div>
        <div>
          <img alt="Vista" src={Vista}/>
        </div>
      </Grid>
    </AboutUsSection>
  );
}

export default AboutUs;
