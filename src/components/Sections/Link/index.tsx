import React from 'react';
import {
    Container, 
    BackGround, 
    BackGroundStar, 
    Content, 
    Title, 
    ButtonInfo
} from './styles';

const Link: React.FC = () => (
    <Container>
        <BackGround>
            <BackGroundStar>

                <Content>
                    <Title>Entre já no futuro da educação</Title>                                        
                    <ButtonInfo>
                        Entrar
                    </ButtonInfo>               
                </Content>
            </BackGroundStar>
        </BackGround>
    </Container>
);

export default Link;