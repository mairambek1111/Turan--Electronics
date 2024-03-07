import iconApple from "../../assets/apple.svg";
import "./brends.scss";
import Slider from "react-slick/lib/slider";
import iconadaptive from "../../assets/adaptive-apple-icon.svg";
import { Link } from "react-router-dom";
function Brends() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 3300,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 949,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1022,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className="brends">
      <div className="container">
        <div className="brends__content">
          <div className="brends__titles">
            <h2 className="brends__title">Бренды</h2>

            <Link className="brends--title__info">Смотреть все</Link>
          </div>

          <Slider {...settings}>
            <button
              className="brends__card"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <Link className="brends__image">
                <img src={iconApple} alt="" />
              </Link>
              <Link className="brends__adaptive-icon">
                <img src={iconadaptive} alt="" />
                <h4 className="brends__adaptive__title">Apple</h4>
              </Link>
            </button>
            <button
              className="brends__card"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <Link className="brends__image">
                <img src={iconApple} alt="" />
              </Link>
              <Link className="brends__adaptive-icon">
                <img src={iconadaptive} alt="" />
                <h4 className="brends__adaptive__title">Apple</h4>
              </Link>
            </button>
            <button
              className="brends__card"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <Link className="brends__image">
                <img src={iconApple} alt="" />
              </Link>
              <Link className="brends__adaptive-icon">
                <img src={iconadaptive} alt="" />
                <h4 className="brends__adaptive__title">Apple</h4>
              </Link>
            </button>
            <button
              className="brends__card"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <Link className="brends__image">
                <img src={iconApple} alt="" />
              </Link>
              <Link className="brends__adaptive-icon">
                <img src={iconadaptive} alt="" />
                <h4 className="brends__adaptive__title">Apple</h4>
              </Link>
            </button>
            <button
              className="brends__card"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <Link className="brends__image">
                <img src={iconApple} alt="" />
              </Link>
              <Link className="brends__adaptive-icon">
                <img src={iconadaptive} alt="" />
                <h4 className="brends__adaptive__title">Apple</h4>
              </Link>
            </button>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Brends;
