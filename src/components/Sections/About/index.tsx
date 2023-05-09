import React from 'react';
import {
    Container, 
    Content,
    Title,
    ContainerInfo,
    Info,
    InfoItem, TitleInfo
} from './styles';

const infos = [
    {
        title: "Escolas",
        text: "Crie planos de ensino complementares ao currículo escolar da sua instituição, todo mundo aprende junto.",
        img: "child_care.png"
    },
    {
        title: "Estudantes",
        text: "Consuma videos, textos informativos e muito conteúdo interativo para complementar seus estudos.",
        img: "school.png"
    },
    {
        title: "Criadores de conteúdo",
        text: "Crie e venda seus conteúdos aqui em um único lugar, você terá acesso a todas as ferramentas para criar experiências interativas e cativar sua base de alunos.",
        img: "auto_detect_voice.png"
    },
    {
        title: "Empreendedores",
        text: "Tenha acesso a nossa gama de soluções educativas e faça com que sua empresa entre para o metaverso.",
        img: "diversity_3.png"
    },
];

const About: React.FC = () => ( 
    <Container>
        <Content>
            <Title>Feito para todos</Title>
            <ContainerInfo>
                {infos.map((el) => (
                    <InfoItem key={el.title}>
                        <img src={require(`../../../images/${el.img}`)} alt={el.title} />
                        <TitleInfo>{el.title}</TitleInfo>
                        <Info>{el.text}</Info>
                    </InfoItem> 
                ))}
            </ContainerInfo>
        </Content>
    </Container>
);


export default About;