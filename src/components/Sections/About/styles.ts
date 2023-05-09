import styled from 'styled-components';
import backgroundImg from '../../../images/quadro.png';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background: #F9EAE1;
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
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Title  = styled.h1`
    font-family: 'Familjen Grotesk', sans-serif;    
    font-weight: 700;
    font-size: 110px;
    line-height: 92%;
    width: 726px;
    text-align: center;
    margin-top: 25px
`;

export const ContainerInfo = styled.div`
    display: flex;
    width: 100%;
    text-align: left;
    margin-left: 81px;
`;


export const InfoItem = styled.div`
    display: block;
    width: 305px;
    text-align: left;
    margin: 10px;
`;


export const Info = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #240506;
`;


export const TitleInfo  = styled.h2`
    font-family: 'Familjen Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;

export const ElipseOrange = styled.img`
    position: absolute;
    top: -180px;
    left: 62px;
`;

export const ElipsePurple = styled.img`
    position: absolute;
    bottom: 300px;
    right: 10px;
`;