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

const Link: React.FC = () => (
    <Container>
        <BackGround>

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

export default Link;