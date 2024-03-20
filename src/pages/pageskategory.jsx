import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import NewPostupleniya from "../components/newPostupleniya/index.jsx";

function Pageskategory() {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
  return (
    <>
      <Header />
        <NewPostupleniya/>
      <Footer />
    </>
  );
}

export default Pageskategory;
