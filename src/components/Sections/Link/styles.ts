import styled from 'styled-components';
import backgroundImg from '../../../images/Vector.png';
import backgroundImgStars from '../../../images/Group.png';

export const Container = styled.div`
    display: flex;
    justify-content:center;
    background-color: #9B4EF7;
    width: 100%;
    height: 768px;
    padding-left:60px;
    position: relative;
`;

export const BackGround = styled.div`
    display: flex;
    width: 1340px;
    justify-content:center;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: 96% 100%;
    background-position: left 40px top;
    `;

export const BackGroundStar = styled.div`
    display: flex;
    background-image: url(${backgroundImgStars});
    background-repeat: no-repeat;
    position: relative;
    background-position: right center;
    margin-right: 60px;
    margin-top: 20px;
    width: 100%;
`;

export const Content = styled.div`
    width: 60%;
    height: auto;
    text-align: center;
    margin-left: 240px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;


export const Title  =styled.h1`
    font-family: 'Familjen Grotesk', sans-serif;    
    font-style: normal;
    font-weight: 700;
    font-size: 98px;
    line-height: 92%;    
    text-align: center;    
    color: #FFFFFF;
`;

export const ButtonInfo = styled.button`
    margin-top: 32px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 79%;
    background: #F9EAE1;
    padding: 24px 50px;
    border-radius: 20px;
    text-align: center;
    color: #240506;
    cursor: pointer;
    border: none;
`;