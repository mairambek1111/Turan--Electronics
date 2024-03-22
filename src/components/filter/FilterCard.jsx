import {FaStar} from "react-icons/fa";
import {IoMdHeart} from "react-icons/io";
import {Link, useNavigate} from "react-router-dom";
import {TbShoppingBag, TbShoppingBagCheck} from "react-icons/tb";
import {useEffect, useState} from "react";
import axios from "axios";

const FilterCard = ({el}) => {
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
    const data = {
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
        const every = response.data.map((el)=> el.product)
        const existingItem = every.find(item => item.id === el.id);
        if (existingItem) {
            nav('/headerFavorite')
        } else {
            await axios.post(`https://oceanbackend.pythonanywhere.com/favorite_post/`,data);
            setHeart(true)
        }
    }
    const addBasket = async () => {
        const response = await axios.get(`https://oceanbackend.pythonanywhere.com/basket`)
        const every = response.data.map((el)=> el.product)
        const existingItem = every.find(item => item.id === el.id);
        if (existingItem) {
            nav('/headerBasket')
        } else {
            await axios.post(`https://oceanbackend.pythonanywhere.com/basket_post/`,data2);
            setBag(true)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://oceanbackend.pythonanywhere.com/favorite`);
            const every = res.data.map((el)=> el.product)
            const existingItem = every.find(item => item.id === el.id);
            if (existingItem) {
                setHeart(true);
            } else {
                setHeart(false);
            }
        };
        fetchData()
        const fetchData2 = async () => {
            const res = await axios.get(`https://oceanbackend.pythonanywhere.com/basket`);
            const every = res.data.map((el)=> el.product)
            const existingItem = every.find(item => item.id === el.id);
            if (existingItem) {
                setBag(true);
            } else {
                setBag(false);
            }
        };
        fetchData();
        fetchData2()
    }, [el]);

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
                    {Math.round(el.price)} сом <span> {Math.round(el.price)} сом</span>
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

export default FilterCard;