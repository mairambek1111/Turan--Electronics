import Cardhero from "../../components/cardHero/cardhero";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NewPostupleniya from "../../components/newPostupleniya/index.jsx";
import Hero from "../../components/hero/hero";
import SwipeBasket from "../../components/swipeBasket/swipeBasket.jsx";
import Brends from "../../components/Brends/Brends.jsx";
import Navbtn from "../../components/navbtn/navbtn.jsx";
import Recomendation from "../../components/recomendation/Recomendation.jsx";
import Register from "../../components/Register/index.jsx";
import Authorization from "../../components/Authorization/index.jsx";
import Enter from "../../components/Enter/Enter.jsx";

function Home() {
  return (
    <>
      {/* <Authorization /> */}
      <Header />
      <Navbtn />
      <Hero />
      <Cardhero />
      <SwipeBasket />
      <NewPostupleniya />
      <Recomendation />
      <Brends />
      <Footer />
    </>
  );
}

export default Home;
