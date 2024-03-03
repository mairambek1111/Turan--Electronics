import Cardhero from "../../components/cardHero/cardhero";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NewPostupleniya from "../../components/newPostupleniya/index.jsx";
import Hero from "../../components/hero/hero";
function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Cardhero />
            <NewPostupleniya/>
            <Footer />
            
        </>
    );
}

export default Home;
