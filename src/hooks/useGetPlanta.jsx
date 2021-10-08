import Data from '../components/HomePlantas/Data';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const useGetPlanta = () => {
    const {id} = useParams();

    const [planta, setPlanta] = useState({});
    
    useEffect(()=>{

        const data = [...Data.dionaeamuscipula, ...Data.drosera, ...Data.nepenthes];

        data.map( planta =>{

            if( planta.id === id ){
                setPlanta({id: planta.id, image:planta.image, name:planta.name, price:planta.price});
            }
            return null ;

        });
        
    }, [id]);

    return [planta];
}
 
export default useGetPlanta;