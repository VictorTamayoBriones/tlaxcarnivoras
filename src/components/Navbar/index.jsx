import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Nav, Toggle } from './styled';
import Button from '../Buttons';
import "animate.css"

const Navbar = () => {

    const [menu, setMenu]=useState(false);

    return (  
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet" /> 
            </Helmet>
            <Nav>
                <h2>TLAXCARNIVORAS</h2>
                <Toggle>
                    <svg onClick={()=>setMenu(!menu)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <ul className={menu ? 'visible animate__animated animate__fadeInRight' : null}>
                        <li><a href="https://hola.com">Contacto</a></li>
                        <li><a href="https://hola.com">Galeria</a></li>
                        <li><Button as={ motion.button } whileHover={{ y: -5, x: 2}} >Log in</Button></li>
                        <li><Button as={ motion.button } whileHover={{ y: -5, x: 2}} secondary >Log up</Button></li>
                    </ul>
                </Toggle>
            </Nav>
        </>
    );
}

export default Navbar;