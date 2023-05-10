import styled from 'styled-components';
import backgroundImg from '../../../images/background-about.png';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #9B4EF7;
    width: 100%;
    height: 768px;
    position: relative;
    @media screen and (max-width: 768px) {
        height: 220px;
        
    }
`;

export const BackGround = styled.div`
    display: flex;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    position: relative;
    @media screen and (max-width: 768px) {
        background-size: cover; /* ajuste o tamanho da imagem de fundo para dispositivos móveis */
    }
`;

export const Content = styled.div`
    width: 1441px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: auto;
        padding: 16px; 
        width: auto;

    }
`;

export const Title  =styled.h1`
    font-family: 'Familjen Grotesk', sans-serif;    
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 92%;
    text-align: left;
    color: #F9EAE1;
    margin-left: 81px;
    width:413px;
    @media screen and (max-width: 768px) {
        text-align: center;
        width: auto;
        font-size: 45px;
        margin-left: 0;
        margin-top: 0px;
        margin-bottom: 20px;    }
    
`;

export const ContainerInfo = styled.div`
    width: 414px;
    text-align: left;
    margin-left: 81px;

    @media screen and (max-width: 768px) {
        text-align: center;
        width: 100%;
        margin-left: 0;

    }
`;

export const Info = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #F9EAE1;
`;
