import styled from 'styled-components';
import { useState } from 'react';
import useGetPlanta from '../../hooks/useGetPlanta';
import { Card, BodyCard, ImageCard, ImageContainer } from '../../components/Card';
import { Button } from '../../components/Buttons';
import theme from '../../theme';
import ModalPago from '../../components/ModalPago';

const Planta = () => {

    const [planta] = useGetPlanta()
    const [pagando, setPagando]=useState(false);
    const [pagado, setPagado]=useState(false);

    const handleClick = ()=>{
        setPagando(true);
        setTimeout(()=>{
            setPagando(false);
            setPagado(true);
            setTimeout(()=>{
                setPagado(false);
            }, 3000 );
        }, 5000)
    }

    return (
        <>
        <Container>
            <Card>
                <ImageContainer>
                    <ImageCard src={planta.image} />
                </ImageContainer>
                <BodyCard>
                    <h2>{planta.name}</h2>
                    <p>{planta.price}</p>
                </BodyCard>
            </Card>
            <Confirm>
                <h2>Confirmar compra</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit voluptatem sequi aliquam, 
                    quis qui eveniet recusandae deleniti vitae cum sed. Inventore quisquam voluptatem officia repellat! 
                    Quis cum mollitia totam molestias pariatur eligendi, expedita dolor ipsa nihil. Quos impedit magnam 
                    aspernatur error laboriosam corrupti eos quibusdam vel provident! Vero, quis.
                </p>
                <Button onClick={handleClick} >Pagar</Button>
            </Confirm>
        </Container>
        { pagando ? <ModalPago pagando={pagando} /> : null }
        { pagado ? <ModalPago pagado={pagado} /> : null }
        </>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;

    @media (max-width: 770px){
        flex-direction: column;
        gap: 30px;
        height: auto;
        padding: 20px;
    }

`;

const Confirm = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 50px;

    h2{
        color: ${theme.verde};
        letter-spacing: 2px;
        font-size: 40px;
    }

    p{
        letter-spacing: 1.2px;
        line-height: 40px;
    }

    @media (max-width: 990px){
        width: 50%;
        gap: 30px;
        h2{
            font-size: 30px;
            letter-spacing: 1.2px;
        }

        p{
            line-height: 25px;
        }
    }

    @media (max-width: 770px){
        width: 100%;
    }

    @media (max-width: 500px){
        h2{
            text-align: center;
            font-size: 25px;
        }
        p{
            text-align: justify;
            line-height: 20px;
        }
    }
`;

export default Planta;