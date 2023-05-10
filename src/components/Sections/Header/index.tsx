import React, { useState } from 'react';
import {Container, 
    BackGround, 
    Logo, 
    Content, 
    ButtonsContainer,
    Buttons, 
    Title, 
    Info,
    ContainerInfo, 
    ButtonInfo,
    MenuIcon, 
    LogoContainer,
    DrawerContainer, 
    Nav, 
    NavItem 
} from './styles';
import logoImg from '../../../images/Logo.png';
import humburguer from '../../../images/cardapio.png';

const buttons = [
    {
        name:"Entrar",
        action: ""
    },
    {
        name:"Sobre",
        action: ""
    },
    {
        name:"Contato",
        action: ""
    },
]

const ButtonsMobile = ({isDrawerOpen}: any) => (

    <DrawerContainer style={{ transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-240px)' }}>
    <Nav>
        {buttons.map(el => (
            <NavItem>
                {el.name}
            </NavItem>
        ))}

    </Nav>
  </DrawerContainer>

);

const ButtonsDesk = () => (
    <ButtonsContainer>
        {buttons.map(el => (
            <Buttons>
                {el.name}
            </Buttons>
        ))}
    </ButtonsContainer>
);

const Header: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };

    return  (<Container>
        <BackGround>
            <LogoContainer>
                <Logo src={logoImg} alt="Logo" width="123" height="62" />
                <MenuIcon src={humburguer} onClick={toggleDrawer} />
                
            </LogoContainer>

            <Content>
                <Title>Transforme seus estudos</Title>
                <ContainerInfo>
                    <Info>Conheça já o futuro da educação imersiva, esse é o Literaverso, uma plataforma única de conteúdo interativo com seu próprio metaverso.</Info>
                </ContainerInfo>
                <ButtonInfo>
                    Saiba mais
                </ButtonInfo>               
            </Content>
            <ButtonsDesk />
            <ButtonsMobile isDrawerOpen={isDrawerOpen} />
        </BackGround>
    </Container>)
};

export default Header;