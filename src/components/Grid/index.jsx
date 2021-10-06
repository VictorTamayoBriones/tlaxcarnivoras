import styled from 'styled-components';
import theme from '../../theme';

const Grid = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
    @media (max-width: 600px){
        padding: 5px;
    }
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    justify-content: center;
`;

const Column = styled.div`
    flex: 25%;
    max-width: 25%;
    padding: 5px;
    background: ${theme.verde};
    border-radius: ${ (props) => {
        if( props.izquierda ){
            return '5px 0px 0px 5px'
        }else if( props.derecha ){
            return '0px 5px 5px 0px'
        }
    }};
    img{
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
        border-radius: 5px;
    }

    @media (max-width: 800px){
        flex: 50%;
        max-width: 50%;
    }

    @media (max-width: 600px){
        flex: 100%;
        max-width: 100%;
    }
`;

export { Grid, Row, Column }
