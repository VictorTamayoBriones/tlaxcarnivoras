import { motion } from 'framer-motion';
import { Container, Datos } from './styled';
import Button from '../Buttons';
import Logo from '../../images/logo.png';

const Hero = () => {
    return (
        <Container>
            <Datos>
                <h2>Plantas Carnivoras</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nam quia, quas laborum rem velit sunt ipsum est eveniet 
                    sint sed aspernatur enim sit nihil facere, magni facilis 
                    totam aliquid ratione odio numquam. Distinctio doloribus 
                    laborum ullam magnam? Aspernatur in nemo soluta deleniti 
                    porro nostrum optio. Magnam esse accusantium vel? Quo.
                </p>
                <Button as={motion.button} whileHover={{ y: -5, x: 2}} >ver mas</Button>
            </Datos>
            <motion.img src={Logo} alt="Tlaxcarnivoras" title="Tlaxcarnivoras" 
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 40,
                    delay: .5,
                }}
            />
        </Container>
    );
}

export default Hero;