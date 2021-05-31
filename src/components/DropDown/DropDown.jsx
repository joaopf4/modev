import { NavColumn } from './styled'

function DropDown({open, close}) {

  return (
    <NavColumn open={true} >
      <ul>
        <li onClick={close}>Sobre nós</li>
        <li onClick={close}>Onde estamos</li>
        <li onClick={close}>Empreendimentos</li>
        <li onClick={close}>Contato</li>
      </ul>
    </NavColumn>
  );
}

export default DropDown;