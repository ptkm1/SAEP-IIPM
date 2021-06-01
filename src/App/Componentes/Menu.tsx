import React from 'react';
import { MdPowerSettingsNew } from "react-icons/md";
import { Logo, Menu as ContainerMenu, Painel, PerfilImg } from '../Styles/Menu.Styled';


const Menu: React.FC = () => {

  function Deslogar() {

    localStorage.clear()

    window.location.href = "/"

  }

  const usuario:any = localStorage.getItem('@pml/usuario')
  const usuarioParseado = JSON.parse(usuario)


  return (
    <ContainerMenu>
      <Logo
      src="https://static.blogdaresenhageral.com.br/wp-content/uploads/2015/08/DPT_BAHIA.png"
      />

    <Painel>
      <MdPowerSettingsNew id="DeslogarBTN" onClick={ () => Deslogar() } />
        <PerfilImg
          src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"
        />

    </Painel>
    </ContainerMenu>
  )
}

export default Menu