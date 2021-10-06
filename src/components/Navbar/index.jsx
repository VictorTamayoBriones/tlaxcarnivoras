import { useState } from 'react';
import { motion } from 'framer-motion';
import { Nav, Toggle } from './styled';
import { Button } from '../Buttons';
import { Link, useHistory } from 'react-router-dom'
import "animate.css"

const Navbar = () => {

    const [menu, setMenu]=useState(false);

    const history = useHistory();

    const handleClick = ({target:{name}}) => history.push(`/${name}`)

    return (  
        <Nav>
            <h2>TLAXCARNIVORAS</h2>
            <Toggle>
                <svg onClick={()=>setMenu(!menu)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <ul className={menu ? 'visible animate__animated animate__fadeInRight' : null}>
                    <li><Link to="/contacto" >Contacto</Link></li>
                    <li><Link to="/gallery" >Galeria</Link></li>
                    <li><Button onClick={handleClick} as={ motion.button } whileHover={{ y: -5, x: 2}} name='login' >Log in</Button></li>
                    <li><Button onClick={handleClick} as={ motion.button } whileHover={{ y: -5, x: 2}} secondary name='logup' >Log up</Button></li>
                </ul>
            </Toggle>
        </Nav>
    );
}

export default Navbar;