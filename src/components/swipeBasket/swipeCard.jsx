import {Link, useNavigate} from "react-router-dom";
import {TbShoppingBag, TbShoppingBagCheck} from "react-icons/tb";
import axios from "axios";
import {useEffect, useState} from "react";
import {FaStar} from "react-icons/fa";

const SwipeCard = ({el}) => {
    const [bag, setBag] = useState(false)
    const nav = useNavigate()
    const [user,setUser] = useState([])
    useEffect(()=>{
        const getUser = async ()=>{
            const email = JSON.parse(localStorage.getItem("email"))
            const res = await axios(`https://oceanbackend.pythonanywhere.com/user/`)
            const {data} = await res
            setUser(data.find(user => user.email === email))
        }
        getUser()
    },[])
    const data = {
        product: el.id,
        user: user.id,
        summ_products: el.price
    }
    const addBasket = async () => {
        const response = await axios.get(`https://oceanbackend.pythonanywhere.com/basket`)
        const every = response.data.map((el)=> el.product)
        const existingItem = every.find(item => item.id === el.id);
        if (existingItem) {
            nav('/headerBasket')
        } else {
            await axios.post(`https://oceanbackend.pythonanywhere.com/basket_post/`,data);
            setBag(true)
        }
    }
    const starsCount = el.stars
    const maxStars = 5
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
        stars.push(<FaStar key={i} className={i < starsCount ? "starsYellow" : "starsNone"} />);
    }
    return (
        <div className="card" data-aos="zoom-in-up" data-aos-duration="1100">
            <div className="stars">
                {stars}
            </div>
            <img src={el.first_photo} alt="no img" className="basketImage"/>
            <h3 className="basketTitle">{el.name}</h3>
            <p className="basketPrice">{el.price} сом</p>
            <div className="basket">
                <Link to={`/product/${el.id}`}>
                    <button className="btnBasket">Быстрый заказ</button>
                </Link>
                {
                    bag ? <TbShoppingBagCheck onClick={() => nav('/headerBasket')} className="basketIcon"/> :
                        <TbShoppingBag onClick={() => addBasket(el)} className="basketIcon"/>
                }
            </div>
        </div>
    );
};

export default SwipeCard;