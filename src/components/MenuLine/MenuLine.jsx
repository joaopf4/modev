import { InlineMenu, HambIcon, MenuIcon, MenuIcon2, MenuIcon3 } from './styled'
// import MenuBox from '../MenuBox'
import { useState } from 'react';

function MenuLine() {
  const [hambDisplay, setHambDisplay] = useState(true);
  const toogleHambDisplay = () => {
    setHambDisplay((prevState) => !prevState);
    console.log(hambDisplay)
  };

  return (
    <>
      <InlineMenu open={hambDisplay}>
        <ul open={hambDisplay}>
          <li>Início</li>
          <li>Sobre nós</li>
          <li>Empreendimentos</li>
          <li>Grupo</li>
          <li>Contato</li>
        </ul> 
      </InlineMenu>
      <HambIcon onClick={toogleHambDisplay}>
        <MenuIcon open={hambDisplay}></MenuIcon>
        <MenuIcon2 open={hambDisplay}></MenuIcon2>
        <MenuIcon3 open={hambDisplay}></MenuIcon3>
      </HambIcon>
      {/* <MenuBox/> */}
    </>
  );
}

export default MenuLine;