import { Container, ContainerInputs, ContainerLabelInput, ContainerImageForm, ContainerTwiceParts, LoginForm, Input } from '../../components/FomrElements';
import { useState } from 'react';
import { Button } from '../../components/Buttons';
import Logo from '../../images/logo.png';

const Logup = () => {

    const [email, setEmail]=useState(null);
    const [phone, setPhone]=useState(null);
    const [password, setPassword]=useState(null);
    const [repeatPassword, setRepeatPassword]=useState(null);

    const handleInput = ({target:{name, value}})=>{
        if( name === 'email' ){
            setEmail(value);
        }else if ( name === 'phone' ){
            setPhone(value);
        }else if( name === 'password' ){
            setPassword(value);
        }else if ( name ===  'repeatPassword' ){
            setRepeatPassword(value)
        }
    }

    return ( 
        <Container>
            <LoginForm>
                <h2>Inicia hoy</h2>
                <ContainerTwiceParts>
                    <ContainerImageForm>
                        <img src={Logo} alt="Tlaxcarnivoras" title="Tlaxcarnivoras" />
                    </ContainerImageForm>
                    <ContainerInputs>

                        <ContainerLabelInput>
                            <Input type="email" value={email} onChange={handleInput} name="email" required />
                            <span>Email</span>
                        </ContainerLabelInput>

                        <ContainerLabelInput>
                            <Input type="text" value={phone} onChange={handleInput} name="phone" required />
                            <span>Phone number</span>
                        </ContainerLabelInput>

                        <ContainerLabelInput>
                            <Input type="password" value={password} onChange={handleInput} name="password" required />
                            <span>Password</span>
                        </ContainerLabelInput>

                        <ContainerLabelInput>
                            <Input type="password" value={repeatPassword} onChange={handleInput} name="repeatPassword" required />
                            <span>Repeat password</span>
                        </ContainerLabelInput>

                        <Button>Empezar</Button>

                    </ContainerInputs>
                </ContainerTwiceParts>
            </LoginForm>
        </Container>
    );
}
 
export default Logup;