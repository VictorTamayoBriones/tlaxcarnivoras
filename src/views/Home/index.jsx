import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Plantas from '../../components/HomePlantas';
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero />
            <Plantas/>
            <Footer/>
        </>
    );
}
 
export default Home;