import styled from 'styled-components';
import { OutlineBtn } from '../../../Buttons';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 80px;
    padding: 30px 0px;

    @media (max-width: 770px){
        gap: 50px;
        ${OutlineBtn}{
            font-size: 16px;
        }
    }

    @media (max-width: 620px){
        padding: 30px 8px;
        gap: 15px;
        ${OutlineBtn}{
            padding: 5px 8px;
            font-size: 12px;
        }
    }

`;

export default Container;