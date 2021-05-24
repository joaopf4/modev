import { SectionContainer, SectionGrid} from './styled'

function Section({id, bgColor}) {

  return (
    <SectionContainer id={id} bgColor={bgColor}>
      <SectionGrid>
        <div>opa</div>
        <div>opa</div>
        <div>opa</div>
        <div>opa</div>
        <div>opa</div>
        <div>opa</div>
      </SectionGrid>
    </SectionContainer>
  );
}

export default Section;