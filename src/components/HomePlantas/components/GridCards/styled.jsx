import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 20px 12px;
    display: flex;
    justify-content: center;
    gap: 80px;
    flex-wrap: wrap;

    @media (max-width: 900px){
        gap: 50px;
    }
`;

export default Container;