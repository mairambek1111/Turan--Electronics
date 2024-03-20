import { FaStar } from "react-icons/fa";
import tel from "../../assets/newPost--iphone.svg";
import { IoMdHeart } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import "../newPostupleniya/newPostupleniya.scss";
import { GrLinkNext } from "react-icons/gr";
import axios from "axios";
import {useEffect, useState} from "react";
import RecomendationCard from "./RecomendationCard.jsx";
import RecomendationMob from "./RecomendationMob.jsx";
const Recomendation = () => {
  const [recom,setRecom] = useState([])
  const getData = async ()=>{
    const url = await axios('https://oceanbackend.pythonanywhere.com/product/')
    const {data} = await url
    setRecom(data)
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <div id="newPostopleniya">
      <div className="container">
        <div className="newPostopleniya">
          <div className="newPostopleniya--title">
            <h1>Рекомендуемые</h1>
            <button className="newPostopleniya--title__btn">
              Смотреть все <GrLinkNext className="btnNext" />
            </button>
          </div>

          <div className="newPostopleniya--all">
            {
              recom.some(el => el.stars >= 4) ?
                  recom.map(el=> el.stars >= 4 && <RecomendationCard key={el.id} el={el}/>)
                  : <div className='newPostopleniya--all__none'> <h4>Нету рекомендации</h4></div>
            }
          </div>
          <div className="newPostopleniya--allMobile">
            {
              recom.some(el => el.stars >= 4) ?
                  recom.map(el=> el.stars >= 4 && <RecomendationMob key={el.id} el={el}/>)
                  : <div className='newPostopleniya--all__none'> <h4>Нету рекомендации</h4></div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
