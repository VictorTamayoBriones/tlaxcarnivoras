import styled from 'styled-components';
import theme from '../../theme';
import bgForm from '../../images/bgLogin.svg';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerTwiceParts = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 700px){
        flex-direction: column;
        align-items: center;
    }
`;

const ContainerImageForm = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    img{
        width: 70%;
    }
    @media (max-width: 700px){
        width: 20%;
        padding: 8px 0px;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
`;

const ContainerInputs = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    padding: 30px;
    @media (max-width: 700px){
        width: 100%;
    }
`;

const LoginForm = styled.form`
    width: 70%;
    background: ${theme.verde};
    border-radius: 8px;
    background-image: url(${bgForm});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 5px 7px 10px rgba(0,0,0,0.3);
    overflow: hidden;
    h2{
        font-family: 'Creepster', cursive;
        color: #fff;
        text-align: center;
        font-size: 45px;
        letter-spacing: 3px;
        @media (max-width: 990px){
            -webkit-text-stroke: 1px ${theme.verde};
            font-size: 40px;
        }
    }
    
    @media (max-width: 700px){
        width: 95%;
        
    }
`;

const Input = styled.input`
    background: ${theme.verdeClaro};
    border: 1px solid ${theme.verdeMuyOscuro};
    border-radius: 8px;
    color: ${theme.verde};
    padding: 8px 15px;
    font-size: 18px;
    &:focus{
        outline: none;
    }
`;

export { Container, ContainerInputs, ContainerImageForm, ContainerTwiceParts, LoginForm, Input };