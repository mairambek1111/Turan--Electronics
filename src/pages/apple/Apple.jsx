import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import FilterApple from "../../components/filter/FilterApple.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const Apple = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
    return (
        <>
            <Header/>
            <FilterApple/>
            <Footer/>
        </>
    );
};

export default Apple;