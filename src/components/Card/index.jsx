import styled from 'styled-components';
import theme from '../../theme';
import { Button } from '../Buttons';

const Card = styled.div`
    width: 300px;
    overflow: hidden;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 280px;
`;

const ImageCard = styled.img`
    width: 100%;
    object-fit: cover;
`;

const BodyCard = styled.div`
    width: 100%;
    background: ${theme.verde};
    color: #fff;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    p{
        font-size: 18px;
    }
    ${Button}{
        &:hover{
            background: ${theme.verdeClaro};
            color: ${theme.verdeOscuro};
            border: solid 1px ${theme.verdeOscuro};
        }
    }
`;

export {Card, ImageContainer, ImageCard, BodyCard};