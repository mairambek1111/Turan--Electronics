import Cardhero from "../../components/cardHero/cardhero";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NewPostupleniya from "../../components/newPostupleniya/index.jsx";
import Hero from "../../components/hero/hero";
import SwipeBasket from "../../components/swipeBasket/swipeBasket.jsx";
import Brends from "../../components/Brends/Brends.jsx";
import Navbtn from "../../components/navbtn/navbtn.jsx";
import Recomendation from "../../components/recomendation/Recomendation.jsx";
import { useEffect, useState } from "react";
import Register from "../../components/Register/index.jsx";

function Home() {
  const [login, setlogin] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (email) {
      setlogin(true);
    } else {
      setlogin(false);
    }
  }, []);

  return (
    <>
      {login ? (
        <>
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
      ) : (
        <Register />
      )}
    </>
  );
}

export default Home;
