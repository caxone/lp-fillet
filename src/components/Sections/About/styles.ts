import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background: #F9EAE1;
    width: 100%;
    height: 768px;
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

export const Title  =styled.h1`
    font-family: 'Familjen Grotesk', sans-serif;    
    font-weight: 700;
    font-size: 110px;
    line-height: 92%;
    width: 726px;
    text-align: center;
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