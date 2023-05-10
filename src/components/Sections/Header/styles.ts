import styled from 'styled-components';
import backgroundImg from '../../../images/background.png';
//import backgroundMobile from '../../../images/background-tablet.png';

export const Container = styled.div`
    display: flex;
    justify-content:center;
    background-color: #9B4EF7;
    width: 100%;
    height: 768px;
    position: relative;

    @media screen and (max-width: 768px) {
        height: auto;
        padding-bottom: 20px;
    }
`;

export const BackGround = styled.div`
    display: flex;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    position: relative;
    width: 1441px;

    @media screen and (max-width: 768px) {
        background-size: contain;
        height: auto;
        width: auto;
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    margin-left: 112px;
    margin-top: 42px;

    @media screen and (max-width: 768px) {
        margin-left: 40px;
        margin-top: 20px;
    }
`;

export const Content = styled.div`
    width: 50%;
    height: auto;
    text-align: center;
    margin-left: 125px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;

    
    @media screen and (max-width: 768px) {
        width: auto;
        margin-left: 0;
    }
`;

export const ButtonsContainer = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    text-align: right;
    margin-right: 65px;
    margin-top:50px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`;

export const Buttons = styled.button`
    border-radius: 40px;
    padding: 16px;
    color: #FFF;
    background: #150202;
    margin-left: 15px;
    cursor: pointer;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: center;
`;

export const Title  =styled.h1`
    font-family: 'Familjen Grotesk', sans-serif;    
    font-size: 110px;
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 86.9px;
    text-align: center;
    margin: 0 0 32px 0;
    color: #F9EAE1;

    @media screen and (max-width: 768px) {
        font-size: 60px;

    }
`;

export const ContainerInfo = styled.div`
    width: 414px;
    @media screen and (max-width: 768px) {
       width: 300px;

    }
`;

export const Info = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #F9EAE1;
    margin-bottom: 32px;
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

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    height: 60px;
    padding: 0 20px;
`;

export const MenuIcon = styled.img`
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
        display: block;
        width: 64px;
        height: 64px;
        margin-top: 20px;
    }
`;

export const DrawerContainer = styled.div`
    width: 240px;
    height: 100%;
    background-color: #333;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    transform: translateX(-240px);
    transition: transform 0.3s ease-in-out;
    @media (max-width: 768px) {
        transform: translateX(0);
    }
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const NavItem = styled.div`
    font-family: 'Inter', sans-serif;
    color: #FFF;
    margin-left: 20px;
    cursor: pointer;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 50px;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`