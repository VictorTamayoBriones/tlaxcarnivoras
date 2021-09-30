import styled from 'styled-components';
import theme from '../../theme';

const Button = styled.button`
    background: ${(props) => props.secondary ? theme.verdeClaro : theme.verde};
    color: ${(props)=> props.secondary ? theme.verde : '#fff' };
    border: solid 1px ${(props)=> props.secondary ? theme.verde : '#fff' };
    border-radius: 8px;
    padding: 8px 25px;
    font-size: 18px;
    &:hover{
        cursor: pointer;
        box-shadow: -5px 3px 8px rgba(0, 0, 0, 0.3);
    }
`;

export default Button;