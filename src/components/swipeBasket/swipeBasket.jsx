import {FaArrowLeft} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./swipeBasket.css";
import Slider from "react-slick/lib/slider";
import {useEffect, useState} from "react";
import axios from "axios";
import SwipeCard from "./swipeCard.jsx";

function SwipeBasket() {
  const [acses,setAcses] = useState([])
  const getAcses = async () =>{
    const res = await axios(`https://oceanbackend.pythonanywhere.com/product/`)
    const {data} = await res
    setAcses(data.filter(el => el.brand === 'Accessories'))
  }
  useEffect(() => {
    getAcses()
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1005,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 973,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="title">Аксессуары</div>
          <div className="arrows">
            <FaArrowLeft color="rgba(255, 115, 0, 1)" className="leftArrow" />
            <FaArrowRight color="rgba(255, 115, 0, 1)" className="rightArrow" />
          </div>
          <div className="arrowDisplay">
            <a href="#">Смотреть все</a>
          </div>
        </div>
        <Slider {...settings}>
          {
            acses.map(el => <SwipeCard key={el.id} el={el}/>)
          }
        </Slider>
      </div>
    </>
  );
}

export default SwipeBasket;
