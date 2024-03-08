import "../favorites/favorites.scss";
import Recomendation from "../../components/recomendation/Recomendation.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
const Favorites = () => {
  return (
    <>
      <Header />
      <div id="favorites">
        <div className="container">
          <div className="favorites">
            <h1>Избранное</h1>
            <div className="favorites--none">
              <h2>Пусто</h2>
            </div>
          </div>
        </div>
        <Recomendation />
        <Footer />
      </div>
    </>
  );
};

export default Favorites;
