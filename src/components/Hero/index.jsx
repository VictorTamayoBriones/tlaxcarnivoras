import styled from 'styled-components';
import Fondo from '../../images/heroBG.svg';

const Hero = () => {
    return (
        <Container/>
    );
}

const Container = styled.div`
    background-image: url(${Fondo});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
`;

export default Hero;