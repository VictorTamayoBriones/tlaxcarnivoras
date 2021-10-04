import { Container, ContainerInputs, ContainerImageForm, ContainerTwiceParts, LoginForm, Input } from '../../components/FomrElements';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button } from '../../components/Buttons';
import { useState } from 'react';
import Logo from '../../images/logo.png';

const Login = () => {

    const [userName, setUserName]=useState('');
    const [userPassword, setUserPassword]=useState('');

    const handleInput = ({target:{name, value}}) => name === 'userName' ? setUserName(value) : setUserPassword(value);

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet"/>
            </Helmet>
            <Container>
                <LoginForm>
                    <h2>Tlaxcarnivoras</h2>
                    <ContainerTwiceParts>
                        <ContainerImageForm>
                            <img src={Logo} alt="Tlaxcarnivoras" title="Tlaxcarnivoras" />
                        </ContainerImageForm>
                        <ContainerInputs>
                            <Input type="text" name='userName' value={userName} onChange={handleInput} placeholder="User name" ></Input>
                            <Input type="password" name='userPassword' value={userPassword} onChange={handleInput} placeholder="Password" ></Input>
                            <Button>Ingresar</Button>
                        </ContainerInputs>
                    </ContainerTwiceParts>
                </LoginForm>
            </Container>
        </HelmetProvider>
    );
}



export default Login;