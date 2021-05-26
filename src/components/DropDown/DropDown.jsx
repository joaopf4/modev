import { NavColumn } from './styled'

function DropDown({open}) {

  return (
    <>
        <NavColumn open={open}>
          <ul>
            <li>Sobre nós</li>
            <li>Onde estamos</li>
            <li>Empreendimentos</li>
            <li>Contato</li>
          </ul>
        </NavColumn>
    </>
  );
}

export default DropDown;