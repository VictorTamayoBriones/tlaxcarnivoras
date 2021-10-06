import styled from 'styled-components';
import theme from '../../theme';
import { motion } from 'framer-motion'
import { Grid, Row, Column } from '../../components/Grid';
import Img1 from '../../images/gallery/img1.png';
import Img2 from '../../images/gallery/img2.png';
import Img3 from '../../images/gallery/img3.png';
import Img4 from '../../images/gallery/img4.png';
import Img5 from '../../images/gallery/img5.png';
import Img6 from '../../images/gallery/img6.png';
import Img7 from '../../images/gallery/img7.png';
import Img8 from '../../images/gallery/img8.png';
import Img9 from '../../images/gallery/img9.png';
import Img10 from '../../images/gallery/img10.png';
import Img11 from '../../images/gallery/img11.png';
import Img12 from '../../images/gallery/img12.png';

const Gallery = () => {

    const getRandom = () =>{
        let delayValue = (Math.random() * 2);
        return delayValue
    }

    return (
        <Conatiner>
            <h2>Tlaxcarnivoras</h2>
            <Grid>
                <Row>
                    <Column izquierda >
                        <motion.img src={Img1} alt="Tlaxcarnivoras" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                        <motion.img src={Img2} alt="Tlaxcarnivoras" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                        <motion.img src={Img6} alt="Tlaxcarnivoras" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                    </Column>
                    <Column>
                        <motion.img src={Img4} alt="Tlaxcarnivoras" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                        <motion.img src={Img8} alt="Tlaxcarnivoras" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                        <motion.img src={Img5} alt="Tlaxcarnivoras" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                    </Column>
                    <Column >
                        <motion.img src={Img7} alt="Tlaxcarnivoras"  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                        <motion.img src={Img10} alt="Tlaxcarnivoras" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                        <motion.img src={Img9} alt="Tlaxcarnivoras"  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                    </Column>
                    <Column derecha >
                        <motion.img src={Img3} alt="Tlaxcarnivoras"  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                        <motion.img src={Img11} alt="Tlaxcarnivoras" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                        <motion.img src={Img12} alt="Tlaxcarnivoras" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 50, delay: getRandom() }} />
                    </Column>
                </Row>
            </Grid>
        </Conatiner>
    );
}

const Conatiner = styled.div`
    width: 100%;
    text-align: center;
    font-family: 'Creepster', cursive;
    -webkit-text-stroke: 1px ${theme.verde};
    color: #fff;
    font-size: 45px;
    letter-spacing: 3px;
    margin-bottom: 20px;
    @media (max-width: 990px){
        font-size: 30px;
    }
`;

export default Gallery;