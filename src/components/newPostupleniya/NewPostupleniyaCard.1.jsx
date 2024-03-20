/* eslint-disable no-unused-vars */
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { TbShoppingBag } from "react-icons/tb";
import { useState } from "react";
import axios from "axios";
import { IoMdHeart } from "react-icons/io";

const NewPostupleniyaCard = ({ el }) => {
  const [heart, setHeart] = useState(false);
  const addFav = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/favorite`);
    const existingItem = response.data.find((item) => item.id === el.id);

    if (existingItem) {
      await axios.delete(`http://127.0.0.1:8000/favorite/${existingItem.id}`);
      setHeart(false);
    } else {
      await axios.post(`http://127.0.0.1:8000/favorite`, el);
      setHeart(true);

      const PostupleniyaCard = ({ el }) => {
        // qwertyui
        const [heart, setHeart] = useState(false);
        const [bag, setBag] = useState(false);
        const nav = useNavigate();
        const user = 1;
        const data = {
          product: el.id,
          user: user,
        };
        const data2 = {
          product: el.id,
          user: user,
          summ_products: el.price,
        };
        const addFav = async () => {
          const response = await axios.get(`http://127.0.0.1:8000/favorite`);
          const every = response.data.map((el) => el.product);
          const existingItem = every.find((item) => item.id === el.id);
          if (existingItem) {
            // await axios.delete(`http://127.0.0.1:8000/favorite/${existingItem.id}`);
            // setHeart(false)
            nav("/headerFavorite");
          } else {
            await axios.post(`http://127.0.0.1:8000/favorite_post/`, data);
            setHeart(true);
          }
        };
      };
      const fetchData = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/favorite`);
        const existingItem = res.data.find((item) => item.id === el.id);
        if (existingItem) {
          setHeart(true);
        } else {
          setHeart(false);
        }
      };
      fetchData();
      return (
        <div
          key={el.id}
          className="newPostopleniya--all__card"
          data-aos="zoom-in-up"
          data-aos-duration="1100"
        >
          <div className="newPostopleniya--all__card--h3">
            <h3>Новое</h3>
            <div className="newPostopleniya--all__card--h3__stars">
              <FaStar className="starsYellow" />
              <FaStar className="starsYellow" />
              <FaStar className="starsNone" />
              <FaStar className="starsNone" />
              <FaStar className="starsNone" />
            </div>
          </div>
          <center>
            <img src={el.photos[0]} alt="no img" />
            <IoMdHeart
              onClick={addFav}
              style={{ color: `${heart ? "red" : "rgba(0, 0, 0, 0.35)"}` }}
              className="imgHeart"
            />
          </center>
          <div className="newPostopleniya--all__card--available">
            <h2>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_960_4624)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                    fill="#FF7300"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_960_4624"
                    x="-2"
                    y="-2"
                    width="26"
                    height="26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_960_4624"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-1" dy="-1" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_960_4624"
                      result="effect2_dropShadow_960_4624"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_960_4624"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              В наличии
            </h2>
          </div>
          <div className="newPostopleniya--all__card--price">
            <h1>{el.price} сом</h1>
          </div>
          <div className="newPostopleniya--all__card--descrip">
            <h1>{el.name}</h1>
            <p>{el.description} .....</p>
          </div>
          <div className="newPostopleniya--all__card--btn">
            <Link to={`/details/products/${el.id}`}>
              <button>Быстрый заказ</button>
            </Link>
            <TbShoppingBag className="btnBasket" />
          </div>
          <div className="newPostopleniya--all__card--colors">
            <h4>Цвет</h4>
            <div className="newPostopleniya--all__card--colors__color">
              {el.color.map((el) => (
                <canvas key={el.id} style={{ background: el }}></canvas>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };
};
export default NewPostupleniyaCard;
