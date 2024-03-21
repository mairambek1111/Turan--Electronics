import Cardhero from "../../components/cardHero/cardhero";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import SwipeBasket from "../../components/swipeBasket/swipeBasket.jsx";
import Brends from "../../components/Brends/Brends.jsx";
import Navbtn from "../../components/navbtn/navbtn.jsx";
import { useEffect, useState } from "react";
import Register from "../../components/Register/index.jsx";
import NewPostupleniyaSlice from "../../components/newPostupleniya/newPostupleniyaSlice.jsx";
import RecomendationSlice from "../../components/recomendation/RecomendationSlice.jsx";

function Home() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (email) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  return (
    <>
      {user ? (
        <>
          <Header />
          <Navbtn />
          <Hero />
          <Cardhero />
          <SwipeBasket />
          <NewPostupleniyaSlice />
          <RecomendationSlice />
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
