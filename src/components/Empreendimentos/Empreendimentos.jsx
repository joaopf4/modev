import { EmpreendimentosSection, Card, Grid } from "./styled";
import Imperatriz from "../../assets/empreendimentos/imperatriz_renault.jpg";
import Luxemburgo from "../../assets/empreendimentos/luxemburgo_renault.jpg";
import Monterey from "../../assets/empreendimentos/monterey_vertaz.jpg";
import SantaLuzia from "../../assets/empreendimentos/sta_luzia_renault.jpg";

function Empreendimentos() {
  return (
    <EmpreendimentosSection>
      <Grid>
        <Card bgImg={Imperatriz}>
          <p>Imperatriz</p>
          <p>BELO HORIZONTE-MG</p>
        </Card>
        <Card bgImg={Luxemburgo}>
          <p>Luxemburgo</p>
          <p>BELO HORIZONTE-MG</p>
        </Card> 
        <Card bgImg={Monterey}>
          <p>Monterey</p>
          <p>BELO HORIZONTE-MG</p>
        </Card> 
        <Card bgImg={SantaLuzia}>
          <p>Santa Luzia</p>
          <p>BELO HORIZONTE-MG</p>
        </Card> 
      </Grid>     
    </EmpreendimentosSection>
  );
}

export default Empreendimentos;
