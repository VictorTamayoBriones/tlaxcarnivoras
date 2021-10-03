import styled from 'styled-components';
import theme from '../../theme';

const Footer = () => {
    return (  
        <FooterComponent>Tlaxcarnivoras ©2021</FooterComponent>
    );
}

const FooterComponent  =styled.footer`
    width: 100%;
    background: ${theme.verdeMuyOscuro};
    color: #fff;
    text-align: center;
    padding: 12px 0px;
    &:hover{
        cursor: default;
    }
`;

export default Footer;