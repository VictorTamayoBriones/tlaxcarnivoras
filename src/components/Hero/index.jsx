import { motion } from 'framer-motion';
import { Container, Datos } from './styled';
import { Button } from '../Buttons';
import Logo from '../../images/logo.png';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {

    const heroRef = useRef(null);
    const [height, setHeight]=useState(null);

    const getHeight = ()=>{
        const newHeight = heroRef.current.clientHeight;
        setHeight(newHeight);
    }

    const seeMore = ()=> window.scrollTo(0, height);

    useEffect(()=>{
        getHeight();
    });

    return (
        <Container ref={heroRef} >
            <Datos>
                <h2>Plantas Carnivoras</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nam quia, quas laborum rem velit sunt ipsum est eveniet 
                    sint sed aspernatur enim sit nihil facere, magni facilis 
                    totam aliquid ratione odio numquam. Distinctio doloribus 
                    laborum ullam magnam? Aspernatur in nemo soluta deleniti 
                    porro nostrum optio. Magnam esse accusantium vel? Quo.
                </p>
                <Button as={motion.button} whileHover={{ y: -5, x: 2}} onClick={seeMore} >ver mas</Button>
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