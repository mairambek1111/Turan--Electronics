import "./news.scss";
import Detail from "../Detail";
import { useState } from "react";

const News = () => {
  const [showDetail, setShowDetail] = useState(false);
  const obj = {
    photo: `https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg`,
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in molestias, labore autem expedita quia tempore veritatis ipsum neque aut saepe perferendis. Dolor id doloremque error fugit itaque labore cupiditate!",
  };

  return (
    <>
      {showDetail && <Detail />}
      {showDetail === false && (
        <div id="news">
          <div className="container">
            <div className="news">
              <div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                    onClick={() => setShowDetail(true)}
                  />
                  <p>{obj.info}</p>
                </div>
              </div>
              <div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                    onClick={() => setShowDetail(true)}
                  />
                  <p>{obj.info}</p>
                </div>
              </div>
              <div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                    onClick={() => setShowDetail(true)}
                  />
                  <p>{obj.info}</p>
                </div>
              </div>
              <div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                    onClick={() => setShowDetail(true)}
                  />
                  <p>{obj.info}</p>
                </div>
              </div>
              <div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                    onClick={() => setShowDetail(true)}
                  />
                  <p>{obj.info}</p>
                </div>
              </div>
              <div className="news-wrap">
                <div className="news-wrap image">
                  <img
                    src="https://cdn.cpdonline.co.uk/wp-content/uploads/2022/09/27091105/1-feature-image-Becoming-a-journalist-scaled.jpg"
                    alt=""
                    onClick={() => setShowDetail(true)}
                  />
                  <p>{obj.info}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
