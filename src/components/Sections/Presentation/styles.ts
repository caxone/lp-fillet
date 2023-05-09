import styled from 'styled-components';
import backgroundImg from '../../../images/background-about.png';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #9B4EF7;
    width: 100%;
    height: 768px;
    position: relative;
`;

export const BackGround = styled.div`
    display: flex;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    position: relative;
`;

export const Content = styled.div`
    min-width: 1441px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
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
`;

export const ContainerInfo = styled.div`
    width: 414px;
    text-align: left;
    margin-left: 81px;
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
