import {Link, useNavigate} from "react-router-dom";
import {TbShoppingBag, TbShoppingBagCheck} from "react-icons/tb";
import axios from "axios";
import {useEffect, useState} from "react";
import {FaStar} from "react-icons/fa";
import PropTypes from "prop-types";

const SwipeCard = ({el}) => {
    const [bag, setBag] = useState(false)
    const nav = useNavigate()
    const [user, setUser] = useState([])
    useEffect(() => {
        const getUser = async () => {
            const email = JSON.parse(localStorage.getItem("email"))
            const res = await axios(`https://oceanbackend.pythonanywhere.com/user/`)
            const {data} = await res
            setUser(data.find(user => user.email === email))
        }
        getUser()
    }, [])
    const data2 = {
        product: el.id,
        user: user.id,
        summ_products: el.price
    }
    const addBasket = async () => {
        const response = await axios.get(`https://oceanbackend.pythonanywhere.com/basket`)
        const {data} = await response
        const currentUser = data.filter(some => some.user === user.id)
        if (currentUser.length > 0) {
            const every = currentUser.map((el) => el.product)
            const existingItem = every.find(item => item.name === el.name);
            if (existingItem) {
                nav('/headerBasket')
            } else {
                await axios.post(`https://oceanbackend.pythonanywhere.com/basket_post/`, data2);
                setBag(true)
            }
        } else {
            await axios.post(`https://oceanbackend.pythonanywhere.com/basket_post/`, data2);
            setBag(true)
        }
    }

    useEffect(() => {
        const fetchData2 = async () => {
            const res = await axios.get(`https://oceanbackend.pythonanywhere.com/basket`);
            const {data} = await res
            const currentUser = data.filter(some => some.user === user.id)
            if (currentUser.length > 0) {
                const every = currentUser.map((el) => el.product)
                const existingItem = every.find(item => item.name === el.name);
                if (existingItem) {
                    setBag(true);
                } else {
                    setBag(false);
                }
            }
        };
        fetchData2()
    }, [user, el]);
    const starsCount = el.stars
    const maxStars = 5
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
        stars.push(<FaStar key={i} className={i < starsCount ? "starsYellow" : "starsNone"}/>);
    }

    function formatPrice(price) {
        if (typeof price !== 'string') {
            price = String(price);
        }

        if (price.length === 5) {
            return price.slice(0, 2) + '.' + price.slice(2);
        } else if (price.length === 6) {
            return price.slice(0, 3) + '.' + price.slice(3);
        } else {
            return price;
        }
    }

    return (
        <div className="card" data-aos="zoom-in-up" data-aos-duration="1100">
            <Link to={`/product/${el.id}`}><div className="stars">
                {stars}
            </div></Link>
            <Link to={`/product/${el.id}`}><img src={el.first_photo} alt="no img" className="basketImage"/></Link>
            <Link to={`/product/${el.id}`}><h3 className="basketTitle">{el.name}</h3></Link>
            <Link to={`/product/${el.id}`}><p className="basketPrice">{formatPrice(Math.floor(el.price))} сом</p></Link>
            <div className="basket">
                <Link to={`/product/${el.id}`}>
                    <button className="btnBasket">Быстрый заказ</button>
                </Link>
                {
                    bag ? <TbShoppingBagCheck onClick={() => nav('/headerBasket')} className="basketIcon"/> :
                        <TbShoppingBag onClick={addBasket} className="basketIcon"/>
                }
            </div>
        </div>
    );
};


SwipeCard.propTypes = {
    el: PropTypes.shape({
        id: PropTypes.number.isRequired,
        product: PropTypes.object.isRequired,
        stars: PropTypes.number.isRequired,
        first_photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        color: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};
export default SwipeCard;