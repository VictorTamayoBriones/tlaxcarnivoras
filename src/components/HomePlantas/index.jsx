import { useState } from 'react';
import styled from 'styled-components';
import FilterButtons from './components/FilterButtons';
import GridCards from './components/GridCards';

const HomePlantas = () => {

    const [plantas, setPlantas]=useState('dionaeamuscipula');

    const handleClick = (name)=>setPlantas(name);

    return (  
        <Container>
            <FilterButtons onChangeData={handleClick} />
            <GridCards plantas={ plantas } />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: max-content;
    padding: 40px;

    @media (max-width: 590px){
        padding: 40px 12px;
    }
`;

export default HomePlantas;