import React from 'react';
import {Container, 
    BackGround, 
    Logo, 
    Content, 
    ButtonsContainer, 
    Buttons, 
    Title, 
    Info,
    ContainerInfo, 
    ButtonInfo
} from './styles';
import logoImg from '../../../images/Logo.png';

const Header: React.FC = () => (
    <Container>
        <BackGround>

            <Logo src={logoImg} alt="Logo" width="123" height="62" />
            <ButtonsContainer>
                <Buttons>
                    Entrar
                </Buttons>
                <Buttons>
                    Sobre
                </Buttons>
                <Buttons>
                    Contato
                </Buttons>
            </ButtonsContainer>
            <Content>
                <Title>Transforme seus estudos</Title>
                <ContainerInfo>
                    <Info>Conheça já o futuro da educação imersiva, esse é o Literaverso, uma plataforma única de conteúdo interativo com seu próprio metaverso.</Info>
                </ContainerInfo>
                <ButtonInfo>
                    Saiba mais
                </ButtonInfo>               
                
   
            </Content>

        </BackGround>

    </Container>
);

export default Header;