import {FaStar} from "react-icons/fa";
import {IoMdHeart} from "react-icons/io";
import {Link} from "react-router-dom";
import {TbShoppingBag} from "react-icons/tb";
import {useEffect, useState} from "react";
import axios from "axios";

const FilterCard = ({el}) => {
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
    // const newPrice = Math.round(el.price_old - (el.price_old * el.discount / 100))

    const starsCount = el.stars
    const maxStars = 5
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
        stars.push(<FaStar key={i} className={i < starsCount ? "starsYellow" : "starsNone"} />);
    }
    return (
        <div className="newPostopleniya--all__card" data-aos="zoom-in-up" data-aos-duration="1100">
            <div className="newPostopleniya--all__card--h3">
                <h3>Новое</h3>
                <div className="newPostopleniya--all__card--h3__stars">
                    {stars}
                </div>
            </div>
            <center>
                <img src={el.first_photo} alt="no img"/>
                <IoMdHeart onClick={addFav} style={{color: `${heart ? 'red' : 'rgba(0, 0, 0, 0.35)'}`}}
                           className="imgHeart"/>
            </center>
            <div className="newPostopleniya--all__card--price">
                <h1>
                    {el.price} сом <span>{el.price} сом</span>
                </h1>
            </div>
            <div className="newPostopleniya--all__card--discount">
                <h4>-5%</h4>
                <h3>экономия 5212 сом</h3>
            </div>
            <div className="newPostopleniya--all__card--descrip">
                <h1>{el.name}</h1>
                <p>{el.description}</p>
            </div>
            <div className="newPostopleniya--all__card--btn">
                <Link to={`/product/${el.id}`}>
                    <button>Быстрый заказ</button>
                </Link>
                <TbShoppingBag className="btnBasket"/>
            </div>
            <div className="newPostopleniya--all__card--colors">
                <h4>Цвет</h4>
                <div className="newPostopleniya--all__card--colors__color">
                    {
                        el.color.map((el)=>(
                            <canvas style={{background:el}}></canvas>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FilterCard;