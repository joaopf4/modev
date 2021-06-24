import { useState } from 'react';
import { InlineMenu, HambIcon, MenuIcon, MenuIcon2, MenuIcon3 } from './styled'
import { Link } from "react-scroll";

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
          <Link
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
            onClick={toogleHambDisplay}
          >
            <li>Início</li>
          </Link>
          <Link
            activeClass="active"
            to="sobreNos"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={toogleHambDisplay}
          >
            <li>Sobre nós</li>
          </Link>
          <Link
            activeClass="active"
            to="empreendimentos"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={toogleHambDisplay}
          >
            <li>Empreendimentos</li>
          </Link>
          <Link
            activeClass="active"
            to="grupoModev"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={toogleHambDisplay}
          >
            <li>Grupo</li>
          </Link>
          <Link
            activeClass="active"
            to="contato"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={toogleHambDisplay}
          >
            <li>Contato</li>
          </Link>
        </ul> 
      </InlineMenu>
      <HambIcon open={hambDisplay} onClick={toogleHambDisplay}>
        <MenuIcon open={hambDisplay}></MenuIcon>
        <MenuIcon2 open={hambDisplay}></MenuIcon2>
        <MenuIcon3 open={hambDisplay}></MenuIcon3>
      </HambIcon>
    </>
  );
}

export default MenuLine;