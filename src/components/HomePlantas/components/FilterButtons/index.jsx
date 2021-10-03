import Container from './styled';
import { OutlineBtn } from '../../../Buttons';
import { motion } from 'framer-motion';

const FilterButtons = ({onChangeData}) => {
    return (  
        <Container>
            <OutlineBtn onClick={()=>onChangeData('dionaeamuscipula')} as={motion.button} whileHover={{ y: -5, x: 2}} >Dionaeamuscipula</OutlineBtn>
            <OutlineBtn onClick={()=>onChangeData('nepenthes')} as={motion.button} whileHover={{ y: -5, x: 2}} >Nepenthes Rebecca Soper</OutlineBtn>
            <OutlineBtn onClick={()=>onChangeData('drosera')} as={motion.button} whileHover={{ y: -5, x: 2}} >Drosera capanesis</OutlineBtn>
        </Container>
    );
}

export default FilterButtons;