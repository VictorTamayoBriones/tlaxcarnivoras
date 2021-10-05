import { Container, ContainerInputs, ContainerLabelInput, ContainerImageForm, ContainerTwiceParts, LoginForm, Input } from '../../components/FomrElements';
import { useState } from 'react';
import { Button } from '../../components/Buttons';
import Logo from '../../images/logo.png';

const Login = () => {

    const [userName, setUserName]=useState('');
    const [userPassword, setUserPassword]=useState('');

    const handleInput = ({target:{name, value}}) => name === 'userName' ? setUserName(value) : setUserPassword(value);
    
    return (
        <Container>
            <LoginForm>
                <h2>Tlaxcarnivoras</h2>
                <ContainerTwiceParts>
                    <ContainerImageForm>
                        <img src={Logo} alt="Tlaxcarnivoras" title="Tlaxcarnivoras" />
                    </ContainerImageForm>
                    <ContainerInputs>
                        <ContainerLabelInput>
                            <Input type="text" name='userName' value={userName} onChange={handleInput} required ></Input>
                            <span>User name</span>
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <Input type="password" name='userPassword' value={userPassword} onChange={handleInput} required ></Input>
                            <span>Password</span>
                        </ContainerLabelInput>
                        <Button>Ingresar</Button>
                    </ContainerInputs>
                </ContainerTwiceParts>
            </LoginForm>
        </Container>
    );
}



export default Login;