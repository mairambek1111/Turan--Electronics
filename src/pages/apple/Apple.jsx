import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import FilterApple from "../../components/filter/FilterApple.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import Hero from "../../components/hero/hero.jsx";
import RecomendationSlice from "../../components/recomendation/RecomendationSlice.jsx";
import Brends from "../../components/Brends/Brends.jsx";

const Apple = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
    return (
        <>
            <Header/>
            <FilterApple/>
            <br/>
            <br/>
            <br/>
            <Hero/>
            <RecomendationSlice/>
            <Brends/>
            <Footer/>
        </>
    );
};

export default Apple;