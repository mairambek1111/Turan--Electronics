import Cardhero from "../../components/cardHero/cardhero";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NewPostupleniya from "../../components/newPostupleniya/index.jsx";
import Hero from "../../components/hero/hero";
import SwipeBasket from "../../components/swipeBasket/swipeBasket.jsx";
import Register from "../../components/Register/index.jsx";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Cardhero />
      <SwipeBasket />
      <NewPostupleniya />
      <Footer />
      <Register />
    </>
  );
}

export default Home;
