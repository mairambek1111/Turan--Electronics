import Brends from "../components/Brends/Brends";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Navbtn from "../components/navbtn/navbtn";
import MainCard from "../components/swipeBasket/mainCard";
function PagesMain() {
  return (
    <>
      <Header />
      <Navbtn />
      <MainCard />
      <br />
      <MainCard />
      <br />
      <MainCard />
      <br />
      <Hero />
      <MainCard />
      <br />
      <MainCard />
      <Brends />
      <Footer />
    </>
  );
}

export default PagesMain;
