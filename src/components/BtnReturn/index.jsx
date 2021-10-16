import styled from 'styled-components';
import theme from '../../theme';
import { useHistory } from 'react-router-dom';

export const BtnReturn = () => {

    const history = useHistory();

    return(
        <Return onClick={ () => history.push('/') } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </Return>
    )

}

const Return = styled.svg`
    width: 50px;
    height: 50px;
    color: ${ theme.verde };
    position: absolute;
    top: 20px;
    left: 25px;
    cursor: pointer;
    transition: ease .3s;
    overflow: hidden;
    &:hover{
        box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
    }

    @media (max-width: 700px){
        width: 30px;
        height: 30px;
        top: 10px;
        left: 10px;
    }

    @media (max-width: 425px){
        top: 15px;
        left: 15px;
    }
`;