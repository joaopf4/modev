import { EmpreendimentosSection, Card, Grid } from "./styled";
import Imperatriz from "../../assets/empreendimentos/imperatriz_renault.jpg";
import Luxemburgo from "../../assets/empreendimentos/luxemburgo_renault.jpg";
import Monterey from "../../assets/empreendimentos/monterey_vertaz.jpg";
import SantaLuzia from "../../assets/empreendimentos/sta_luzia_renault.jpg";
import IconeMais from "../../assets/icones/icone-mais-2.png";

function Empreendimentos() {
  return (
    <EmpreendimentosSection id="empreendimentos">
      <Grid>
        <Card bgImg={Imperatriz}>
          <img alt="Ver mais" src={IconeMais} />
          <p>Imperatriz</p>
          <p>BELO HORIZONTE-MG</p>
        </Card>
        <Card bgImg={Luxemburgo}>
          <img alt="Ver mais" src={IconeMais} />
          <p>Luxemburgo</p>
          <p>BELO HORIZONTE-MG</p>
        </Card> 
        <Card bgImg={Monterey}>
          <img alt="Ver mais" src={IconeMais} />
          <p>Monterey</p>
          <p>BELO HORIZONTE-MG</p>
        </Card> 
        <Card bgImg={SantaLuzia}>
          <img alt="Ver mais" src={IconeMais} />
          <p>Santa Luzia</p>
          <p>BELO HORIZONTE-MG</p>
        </Card> 
      </Grid>     
    </EmpreendimentosSection>
  );
}

export default Empreendimentos;
