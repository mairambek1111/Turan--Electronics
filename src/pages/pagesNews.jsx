import Header from "../components/header/header";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
function PagesNews() {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
  return (
    <>
      <Header />
      <div id="basket">
        <div className="container">
          <div className="basket">
            <div className="basket--none">
              <h2>Пока здесь пусто</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PagesNews;
