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
        width: ${(props => props.contacto ? "100%" : "70%" )};
    }
    @media (max-width: 700px){
        width: ${ (props) => props.contacto ? "35%" : "20%" };
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

const ContainerLabelInput=styled.div`
    position: relative;
    width: 100%;
    height: max-content;
    background: #000;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    :last-child{
        margin-bottom: 0;
    }
    span{
        color: ${theme.verde};
        position: absolute;
        transition: 0.5s;
        pointer-events: none;
        padding: 0px 15px;
    }
    input{
        position: absolute;
        width: 100%;
        &:focus~span{
            transform: translateX(-10px) translateY(-32px);
            font-size: 16px;
            color: ${theme.verdeClaro};
        }
        &:valid~span{
            transform: translateX(-10px) translateY(-32px);
            font-size: 16px;
            color: ${theme.verdeClaro};
        }
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
        font-family: ${ (props)=> props.contacto ? "'Amiko', sans-serif" : "'Creepster', cursive" };
        -webkit-text-stroke: 1px ${theme.verde};
        color: #fff;
        text-align: center;
        font-size: 45px;
        letter-spacing: 3px;
        margin-bottom: 20px;
        @media (max-width: 990px){
            font-size: ${ (props) => props.contacto ? "30px" : "40px" };
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

const TextArea = styled.textarea`
    background: ${theme.verdeClaro};
    border: 1px solid ${theme.verdeMuyOscuro};
    border-radius: 8px;
    color: ${theme.verde};
    padding: 8px 15px;
    font-size: 15px;
    max-width: 100%;
    min-width: 100%;
    max-height: 180px;
    min-height: 100px;
    &:focus{
        outline: none;
    }
`;

export { Container, ContainerInputs, ContainerImageForm, ContainerTwiceParts, ContainerLabelInput, LoginForm, Input, TextArea };