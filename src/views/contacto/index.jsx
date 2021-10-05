import { Container, ContainerImageForm, ContainerInputs, ContainerLabelInput, ContainerTwiceParts, LoginForm, Input, TextArea } from '../../components/FomrElements';
import { Button } from '../../components/Buttons';
import ContactoSvg from '../../images/contacto.svg';

const Contacto = () => {
    return (  
        <Container>
            <LoginForm contacto >
                <h2>Deseamos escucharte</h2>
                <ContainerTwiceParts>
                    <ContainerImageForm contacto >
                        <img src={ContactoSvg} alt="Online illustrations by Storyset" title="Online illustrations by Storyset" />
                    </ContainerImageForm>
                    <ContainerInputs>
                        <ContainerLabelInput>
                            <Input type="email" name="email" required />
                            <span>Email</span>
                        </ContainerLabelInput>                        
                        <TextArea  placeholder="write a message..." required />
                        <Button >Enviar</Button>
                    </ContainerInputs>
                </ContainerTwiceParts>
            </LoginForm>
        </Container>
    );
}
 
export default Contacto;