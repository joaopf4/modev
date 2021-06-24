
import { SideBarDiv, SocialIcons, IconLinks } from './styled'
import ModevLogo from '../../assets/logos/logo-MODEV.png'

function SideBar() {

  return (
    <SideBarDiv>
      <img src={ModevLogo} alt="Modev"/>
      <SocialIcons>
        <IconLinks href="http://www.instagram.com/modev" target="blank">
          <i class="fab fa-instagram"></i>
        </IconLinks>
        <IconLinks href="http://www.facebook.com/modev" target="blank">
          <i class="fab fa-facebook-f"></i>
        </IconLinks>
         <IconLinks href="https://wa.me/552196312XXXX" target="blank">
          <i class="fab fa-whatsapp"></i>
        </IconLinks>
         <IconLinks href="http://www.facebook.com/modev" target="blank">
          <i class="fab fa-youtube"></i>
        </IconLinks>
      </SocialIcons>
    </SideBarDiv>
  );
}

export default SideBar;