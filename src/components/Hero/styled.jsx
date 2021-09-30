import styled from 'styled-components';
import Fondo from '../../images/heroBG.svg';

const Container = styled.div`
    background-image: url(${Fondo});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    padding: 100px 20px 0px 20px;
    display: flex;
    justify-content: space-between;
    img{
        width: 500px;
        height: 500px;
        margin-right: 50px;
    }
    @media (max-width: 930px){
        justify-content: center;
        img{
            width: 250px;
            height: 250px;
            margin: 0;
            position: absolute;
        }
    }
`;

const Datos = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;
    h2{
        color: #fff;
        font-size: 35px;
        letter-spacing: 5px;
    }
    p{
        color: #fff;
        line-height: 30px;
        letter-spacing: 1.5px;
    }

    @media (max-width: 930px){
        width: 100%;
        height: max-content;
        text-align:center;
        position: relative;
        padding: 12px;
        border-radius: 8px;
        z-index: 10;
        background: rgba(0, 0, 0, 0.65);
    }

    @media (max-width: 480px){
        gap: 50px;
        h2{
            font-size: 28px;
        }
        p{
            font-size: 18px;
            line-height: normal;
        }
    }
`;

export { Container, Datos };