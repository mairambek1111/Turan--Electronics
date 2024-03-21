import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import NewPostupleniya from "../components/newPostupleniya/index.jsx";
import Recomendation from "../components/recomendation/Recomendation.jsx";

function Pageskategory() {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
  return (
    <>
      <Header />
        <NewPostupleniya/>
        <Recomendation/>
      <Footer />
    </>
  );
}

export default Pageskategory;
