import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import Apple from "./apple/Apple.jsx";

function Pageskategory() {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
  return (
    <>
        <Apple />
    </>
  );
}

export default Pageskategory;
