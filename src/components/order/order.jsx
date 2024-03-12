import { RiStarSFill } from "react-icons/ri";
import phone from "../../assets/newPost--iphone.svg";
import "./order.scss";
import { Link } from "react-router-dom";

const star = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dd_2532_2640)">
      <path
        d="M8.10698 11.5135L10.8736 13.1868C11.3803 13.4935 12.0003 13.0402 11.867 12.4668L11.1336 9.32017L13.5803 7.20017C14.027 6.8135 13.787 6.08017 13.2003 6.0335L9.98032 5.76017L8.72031 2.78684C8.49365 2.24684 7.72031 2.24684 7.49365 2.78684L6.23365 5.7535L3.01365 6.02684C2.42698 6.0735 2.18698 6.80684 2.63365 7.1935L5.08032 9.3135L4.34698 12.4602C4.21365 13.0335 4.83365 13.4868 5.34032 13.1802L8.10698 11.5135Z"
        fill="black"
        fill-opacity="0.35"
        shape-rendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_2532_2640"
        x="-2.59766"
        y="-2.61816"
        width="19.4102"
        height="18.9043"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2532_2640"
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
          in2="effect1_dropShadow_2532_2640"
          result="effect2_dropShadow_2532_2640"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_2532_2640"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

function Order({ setUserData }) {
  return (
    <div>
      <div className="container">
        <div className="container-link">
          <h1>Корзина</h1>
          <Link>удалить все</Link>
        </div>
        <div className="order">
          <div className="order-wrap">
            <div className="order-wrap__image">
              <img src={phone} alt="iPhone" />
            </div>
            <div className="order-wrap__info info">
              <p>Смартфон Apple Iphone 14 Pro max 256GB</p>
              <div className="info__button">
                <button>-</button>
                <h1>1</h1>
                <button>+</button>
              </div>
            </div>
            <div className="order-wrap__price">
              <h1>74500с</h1>
              <h2>81000 с </h2>
            </div>
            <div className="order-wrap__stars">
              {star} {star} {star} {star} {star}
            </div>
          </div>
        </div>
        <button onClick={() => setUserData(true)} className="order__btn">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Order;
