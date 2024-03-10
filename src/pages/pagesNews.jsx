import Header from "../components/header/header";

function PagesNews() {
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
