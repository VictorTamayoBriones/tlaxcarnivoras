import { useState, useEffect } from 'react';
import { Card, ImageContainer, ImageCard, BodyCard } from '../../../Card';
import { useHistory } from 'react-router-dom';
import { Button } from '../../../Buttons';
import { motion } from 'framer-motion';
import Container from './styled';
import DataPlantas from '../../Data';

const GridCards = ({plantas}) => {

    const [data, setData]=useState(DataPlantas.dionaeamuscipula);

    const history =  useHistory();

    const handleClick = (id)=> history.push(`/planta${id}`);

    useEffect(()=>{
        if( plantas === 'dionaeamuscipula' ){
            setData(DataPlantas.dionaeamuscipula);
        }else if( plantas === 'nepenthes' ){
            setData(DataPlantas.nepenthes);
        }else{
            setData(DataPlantas.drosera);
        }
    }, [plantas]);

    return (
        <Container>
            {
                data.map((planta)=>{
                    return(
                        <Card key={planta.id} as={motion.div} whileHover={{ y: -20 }} >
                            <ImageContainer>
                                <ImageCard src={planta.image} alt="Planta carnivora" />
                            </ImageContainer>
                            <BodyCard>
                                <h2>{planta.name}</h2>
                                <p>{planta.price}</p>
                                <Button onClick={ ()=>handleClick(planta.id) } >Comprar</Button>
                            </BodyCard>
                        </Card>
                    )
                })
            }
        </Container>
    );
}

export default GridCards;