import {FaStar} from "react-icons/fa";
import {IoMdHeart} from "react-icons/io";
import {TbShoppingBag, TbShoppingBagCheck} from "react-icons/tb";
import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const RecomendationCard = ({el}) => {
    const [heart, setHeart] = useState(false)
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
    const data1 = {
        product: el.id,
        user: user.id
    }
    const data2 = {
        product: el.id,
        user: user.id,
        summ_products: el.price
    }
    const addFav = async () => {
        const response = await axios.get(`https://oceanbackend.pythonanywhere.com/favorite`)
        const {data} = await response
        const currentUser = data.filter(some => some.user === user.id)
        if (currentUser) {
            const every = currentUser.map((el) => el.product)
            const existingItem = every.find(item => item.id === el.id);
            if (existingItem) {
                nav('/headerFavorite')
            } else {
                await axios.post(`https://oceanbackend.pythonanywhere.com/favorite_post/`, data1);
                setHeart(true)
            }
        }else {
            await axios.post(`https://oceanbackend.pythonanywhere.com/favorite_post/`, data1);
            setHeart(true)
        }
    }
    const addBasket = async () => {
        const response = await axios.get(`https://oceanbackend.pythonanywhere.com/basket`)
        const {data} = await response
        const currentUser = data.filter(some => some.user === user.id)
        console.log(currentUser.length)
        if (currentUser.length > 0) {
            const every = currentUser.map((el) => el.product)
            const existingItem = every.find(item => item.name === el.name);
            if (existingItem) {
                nav('/headerBasket')
            } else {
                await axios.post(`https://oceanbackend.pythonanywhere.com/basket_post/`,data2);
                setBag(true)
            }
        }else {
            await axios.post(`https://oceanbackend.pythonanywhere.com/basket_post/`,data2);
            setBag(true)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://oceanbackend.pythonanywhere.com/favorite`);
            const {data} = await res
            const currentUser = data.filter(some => some.user === user.id)
            if (currentUser) {
                const every = currentUser.map((el) => el.product)
                const existingItem = every.find(item => item.id === el.id);
                if (existingItem) {
                    setHeart(true);
                } else {
                    setHeart(false);
                }
            }
        };
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
        fetchData();
        fetchData2()
    }, [user,el]);
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
        <div className="newPostopleniya--all__card" data-aos="zoom-in-up" data-aos-duration="1100">
            <Link to={`/product/${el.id}`}><div className="newPostopleniya--all__card--h3">
                <h3>Новое</h3>
                <div className="newPostopleniya--all__card--h3__stars">
                    {stars}
                </div>
            </div></Link>
            <center>
                <Link to={`/product/${el.id}`}><img src={el.first_photo} alt="no img"/></Link>
                <IoMdHeart onClick={addFav} style={{color: `${heart ? 'red' : 'rgba(0, 0, 0, 0.35)'}`}}
                           className="imgHeart"/>
            </center>
            <Link to={`/product/${el.id}`}><div className="newPostopleniya--all__card--price">
                <h1>
                    {formatPrice(Math.round(el.price))} сом <span>{formatPrice(Math.round(el.price))} сом</span>
                </h1>
            </div></Link>
            <Link to={`/product/${el.id}`}><div className="newPostopleniya--all__card--discount">
                <h4>-{5}%</h4>
                <h3>экономия 5210 сом</h3>
            </div></Link>
            <Link to={`/product/${el.id}`}><div className="newPostopleniya--all__card--descrip">
                <h1>{el.name}</h1>
                <p>{el.description}</p>
            </div></Link>
            <div className="newPostopleniya--all__card--btn">
                <Link to={`/product/${el.id}`}>
                <button>Быстрый заказ</button>
                </Link>
                {
                    bag ?  <TbShoppingBagCheck onClick={()=> nav('/headerBasket')} className="btnBasket"/> :  <TbShoppingBag onClick={addBasket} className="btnBasket"/>
                }
            </div>
            <div className="newPostopleniya--all__card--colors">
                <h4>Цвет</h4>
                <div className="newPostopleniya--all__card--colors__color">
                    {
                        el.color.map((el,inx)=>(
                            <canvas key={inx} style={{background:el}}></canvas>
                        ))
                    }
                </div>
            </div>
    </div>
  );
};


RecomendationCard.propTypes = {
    el: PropTypes.shape({
        id: PropTypes.number.isRequired,
        product: PropTypes.object,
        stars: PropTypes.number.isRequired,
        first_photo: PropTypes.string.isRequired,
        price: PropTypes.string,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        color: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default RecomendationCard;
