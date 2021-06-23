
import { SideBarDiv, SocialIcons, IconLinks } from './styled'
import ModevLogo from '../../assets/logos/logo-MODEV.png'

function SideBar() {

  return (
    <SideBarDiv>
      <img src={ModevLogo} alt="Modev"/>
      <SocialIcons>
        <IconLinks>
          <i class="fab fa-instagram"></i>
        </IconLinks>
        <IconLinks>
          <i class="fab fa-facebook-f"></i>
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