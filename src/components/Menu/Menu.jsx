import { useState } from 'react';
import { MenuBox, Header, HambIcon, MenuIcon, MenuIcon2, MenuIcon3 } from './styled'
import DropDown from '../DropDown';

function Menu() {
  const [hambDisplay, setHambDisplay] = useState(false)
  const toogleHambDisplay = () => {
    setHambDisplay((prevState) => !prevState)
    console.log(hambDisplay)
  }

  return (
    <Header>
      <MenuBox>
        <HambIcon onClick={toogleHambDisplay}>
          <MenuIcon open={hambDisplay}></MenuIcon>
          <MenuIcon2 open={hambDisplay}></MenuIcon2>
          <MenuIcon3 open={hambDisplay}></MenuIcon3>
        </HambIcon>
      </MenuBox>
      <DropDown open={hambDisplay} close={() => toogleHambDisplay()}/>
    </Header>
  );
}

export default Menu;