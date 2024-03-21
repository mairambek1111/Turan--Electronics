import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import NewPostupleniyaSlice from "../components/newPostupleniya/newPostupleniyaSlice.jsx";
import RecomendationSlice from "../components/recomendation/RecomendationSlice.jsx";
import Hero from "../components/hero/hero.jsx";

function Pageskategory() {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
  return (
    <>
      <Header />
        <NewPostupleniyaSlice/>
        <br/>
        <br/>
        <br/>
        <Hero/>
        <RecomendationSlice/>
      <Footer />
    </>
  );
}

export default Pageskategory;
