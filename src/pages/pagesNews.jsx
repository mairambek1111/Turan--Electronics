import Header from "../components/header/header";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import News from "../components/News/index.jsx";
function PagesNews() {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
  return (
    <>
      <Header />
        <News/>
    </>
  );
}

export default PagesNews;
