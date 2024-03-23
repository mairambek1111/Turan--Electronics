import "./news.scss";
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

const News = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scroll(0,0)
  }, [pathname]);
  const obj = {
    photo: `https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg`,
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in molestias, labore autem expedita quia tempore veritatis ipsum neque aut saepe perferendis. Dolor id doloremque error fugit itaque labore cupiditate!",
  };

  return (
        <div id="news">
          <div className="container">
            <h6 className="newsH6">Главная / Новости</h6>
            <div className="news">
              <Link to={'/pagesNews/details'}><div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                  />
                  <p>{obj.info}</p>
                </div>
              </div></Link>
              <Link to={'/pagesNews/details'}><div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                  />
                  <p>{obj.info}</p>
                </div>
              </div></Link>
              <Link to={'/pagesNews/details'}><div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                  />
                  <p>{obj.info}</p>
                </div>
              </div></Link>
              <Link to={'/pagesNews/details'}><div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                  />
                  <p>{obj.info}</p>
                </div>
              </div></Link>
              <Link to={'/pagesNews/details'}><div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                  />
                  <p>{obj.info}</p>
                </div>
              </div></Link>
              <Link to={'/pagesNews/details'}><div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                  />
                  <p>{obj.info}</p>
                </div>
              </div></Link>
            </div>
          </div>
        </div>
  );
};

export default News;
