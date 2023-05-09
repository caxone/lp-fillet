import React from 'react';
import {
    Container, 
    BackGround, 
    Content,
    Title,
    ContainerInfo,
    Info

} from './styles';

const About: React.FC = () => ( 
    <Container>
        <BackGround>
            <Content>
                <Title>Uma plataforma imersiva</Title>
                <ContainerInfo>
                    <Info>No literaverso você aprende e se diverte ao mesmo tempo, consome conteúdo exclusivo e aprende diversas matérias presentes no currículo nacional.</Info>
                </ContainerInfo>
            </Content>
        </BackGround>
    </Container>
);


export default About;