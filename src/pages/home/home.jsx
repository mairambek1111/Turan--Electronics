import Cardhero from "../../components/cardHero/cardhero";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NewPostupleniya from "../../components/newPostupleniya/index.jsx";
import Hero from "../../components/hero/hero";
import Recomendation from "../../components/recomendation/Recomendation.jsx";
import SwipeBasket from "../../components/swipeBasket/swipeBasket.jsx";
import Navbtn from "../../components/navbtn/navbtn.jsx";
import Brends from "../../components/Brends/Brends.jsx";
import Register from "../../components/Register/index.jsx";
import Authorization from "../../components/Authorization/index.jsx";
function Home() {
   
  return (
    <>
      <Header />
      <Hero />
      <Cardhero />
      <SwipeBasket />
      <NewPostupleniya />
      <Footer />
    </>
  );
}

export default Home;
