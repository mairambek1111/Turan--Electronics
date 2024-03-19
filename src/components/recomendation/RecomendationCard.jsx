import {FaStar} from "react-icons/fa";
import {IoMdHeart} from "react-icons/io";
import {TbShoppingBag} from "react-icons/tb";
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const RecomendationCard = ({el}) => {
    const [heart, setHeart] = useState(false)
    const addFav = async () => {
        const response = await axios.get(`http://localhost:3000/favorite`);
        const existingItem = response.data.find(item => item.id === el.id);

        if (existingItem) {
            await axios.delete(`http://localhost:3000/favorite/${existingItem.id}`);
            setHeart(false)
        } else {
            await axios.post(`http://localhost:3000/favorite`, el);
            setHeart(true)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3000/favorite`);
            const existingItem = res.data.find(item => item.id === el.id);
            if (existingItem) {
                setHeart(true);
            } else {
                setHeart(false);
            }
        };
        fetchData();
    }, []);
    const newPrice = Math.round(el.price_old - (el.price_old * el.discount / 100))
    return (
        <div className="newPostopleniya--all__card" data-aos="zoom-in-up" data-aos-duration="1100">
            <div className="newPostopleniya--all__card--h3">
                <h3>Новое</h3>
                <div className="newPostopleniya--all__card--h3__stars">
                    <FaStar className="starsYellow"/>
                    <FaStar className="starsYellow"/>
                    <FaStar className="starsNone"/>
                    <FaStar className="starsNone"/>
                    <FaStar className="starsNone"/>
                </div>
            </div>
            <center>
                <img src={el.image} alt="no img"/>
                <IoMdHeart onClick={addFav} style={{color: `${heart ? 'red' : 'rgba(0, 0, 0, 0.35)'}`}}
                           className="imgHeart"/>
            </center>
            <div className="newPostopleniya--all__card--price">
                <h1>
                    {newPrice} сом <span>{el.price_old} сом</span>
                </h1>
            </div>
            <div className="newPostopleniya--all__card--discount">
                <h4>-{el.discount}%</h4>
                <h3>экономия {el.price_old - newPrice} сом</h3>
            </div>
            <div className="newPostopleniya--all__card--descrip">
                <h1>{el.title}</h1>
                <p>{el.description}</p>
            </div>
            <div className="newPostopleniya--all__card--btn">
                <Link to={`/details/recomendation/${el.id}`}>
                <button>Быстрый заказ</button>
                </Link>
                <TbShoppingBag className="btnBasket"/>
            </div>
            <div className="newPostopleniya--all__card--colors">
                <h4>Цвет</h4>
                <div className="newPostopleniya--all__card--colors__color">
                    <canvas></canvas>
                    <canvas></canvas>
                    <canvas></canvas>
                </div>
            </div>
        </div>
    );
};

export default RecomendationCard;