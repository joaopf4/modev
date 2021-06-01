
import { SideBarDiv, SocialIcons, IconLinks } from './styled'
import ModevLogo from '../../assets/logos/Logo-MODEV.png'

function SideBar() {
  // const [hambDisplay, setHambDisplay] = useState(false)
  // const toogleHambDisplay = () => {
  //   setHambDisplay((prevState) => !prevState)
  // }

  return (
    <SideBarDiv>
      <img src={ModevLogo} alt="Modev"/>
      <SocialIcons>
        <IconLinks>
          <i class="fab fa-instagram"></i>
        </IconLinks>
        <IconLinks>
          <i class="fab fa-facebook"></i>
        </IconLinks>
        <IconLinks>
          <i class="fab fa-whatsapp"></i>
        </IconLinks>
        <IconLinks>
          <i class="fab fa-youtube"></i>
        </IconLinks>
        <IconLinks>
          <i class="fab fa-facebook-messenger"></i>
        </IconLinks>
      </SocialIcons>
    </SideBarDiv>
  );
}

export default SideBar;