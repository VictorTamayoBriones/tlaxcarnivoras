import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Plantas from '../../components/HomePlantas';
import Footer from "../../components/Footer";
// import { CokiesModal } from "../../components/CokiesModal";

const Home = () => {
    return (
        <>
            {/* <CokiesModal /> */}
            <Navbar/>
            <Hero />
            <Plantas/>
            <Footer/>
        </>
    );
}
 
export default Home;