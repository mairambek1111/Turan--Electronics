import Cardhero from "../../components/cardHero/cardhero";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NewPostupleniya from "../../components/newPostupleniya/index.jsx";
import Hero from "../../components/hero/hero";
import Recomendation from "../../components/recomendation/Recomendation.jsx";
function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Cardhero />
            <NewPostupleniya/>
            <Recomendation/>
            <Footer />
        </>
    );
}

export default Home;
