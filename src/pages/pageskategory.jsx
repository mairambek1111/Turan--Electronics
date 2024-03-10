import Footer from "../components/footer/footer";
import Header from "../components/header/header";

function Pageskategory() {
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
      <Footer />
    </>
  );
}

export default Pageskategory;
