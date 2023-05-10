import React from 'react';
import {Container, 
    BackGround, 
    Logo, 
    Content, 
    ButtonsContainer,
    ButtonsContainerMobile,
    Buttons, 
    Title, 
    Info,
    ContainerInfo, 
    ButtonInfo
} from './styles';
import logoImg from '../../../images/Logo.png';

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

const ButtonsMobile = () => (
    <ButtonsContainerMobile>
    {buttons.map(el => (
        <Buttons>
            {el.name}
        </Buttons>
    ))}
    </ButtonsContainerMobile>
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

const Header: React.FC = () => (
    <Container>
        <BackGround>
            <div>
                <Logo src={logoImg} alt="Logo" width="123" height="62" />
            </div>
            <ButtonsMobile />
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
        </BackGround>
    </Container>
);

export default Header;