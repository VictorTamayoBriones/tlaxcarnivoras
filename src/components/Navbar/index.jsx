import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Button from '../Buttons';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
                    <svg onClick={()=>setMenu(!menu)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <ul className={menu ? 'visible' : ''}>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Galeria</a></li>
                        <li><Button as={ motion.button } whileHover={{ y: -5, x: 2}} >Log in</Button></li>
                        <li><Button as={ motion.button } whileHover={{ y: -5, x: 2}} secondary >Log up</Button></li>
                    </ul>
                </Toggle>
            </Nav>
        </>
    );
}

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
    position: absolute;
    h2{
        font-family: 'Creepster', cursive;
        color: #fff;
        font-size: 32px;
        letter-spacing: 5px;
        &:hover{
            cursor: pointer;
        }
    }
    svg{
        color: #fff;
        display: none;
    }
    ul{
        width: 100%;
        display: flex;
        list-style: none;
        justify-content: flex-end;
        align-items: center;
        gap: 30px;
        li{
            width: max-content;
        }
        a{
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            &:hover{
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
    @media (max-width: 930px){
        align-items: flex-start;
        ul{
            flex-direction: column;
            background: #00311d;
            width: max-content;
            position: absolute;
            padding: 12px 8px;
            border-radius: 8px;
            right: 0;
            top: 50px;
            box-shadow: -5px 5px 8px rgba(0, 0, 0, 0.3);
            z-index: 100;
            visibility: hidden;
        }
        svg{
            display: block;
            &:hover{
                cursor: pointer;
            }
        }
    }
`;

const Toggle = styled.div`
    width: 50%;
    @media (max-width: 930px){
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`;

export default Navbar;