import { useState } from "react";
import {
  Menu,
  HambIcon,
  MenuIcon,
  MenuIcon2,
  MenuIcon3,
} from "./styled";
import DropDown from "../DropDown";

function MenuBox() {
  const [hambDisplay, setHambDisplay] = useState(false);
  const toogleHambDisplay = () => {
    setHambDisplay((prevState) => !prevState);
  };

  return (
    <>
      <Menu>
        <HambIcon onClick={toogleHambDisplay}>
          <MenuIcon open={hambDisplay}></MenuIcon>
          <MenuIcon2 open={hambDisplay}></MenuIcon2>
          <MenuIcon3 open={hambDisplay}></MenuIcon3>
        </HambIcon>
        <DropDown open={hambDisplay} close={() => toogleHambDisplay()} />
      </Menu>
    </>
  );
}

export default MenuBox;
