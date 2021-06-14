// import { useState } from 'react';
import {  HeaderDiv } from './styled'
// import DropDown from '../DropDown';
import MenuBox from '../MenuBox';
import MenuLine from '../MenuLine';

function Header() {
  // const [hambDisplay, setHambDisplay] = useState(false)
  // const toogleHambDisplay = () => {
  //   setHambDisplay((prevState) => !prevState)
  // }

  return (
    <HeaderDiv>
      {/* <MenuBox/> */}
      <MenuLine/>
    </HeaderDiv>
  );
}

export default Header;