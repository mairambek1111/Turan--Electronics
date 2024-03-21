import {IoMdHeart} from "react-icons/io";
import {FaStar} from "react-icons/fa";
import {TbShoppingBag, TbShoppingBagCheck} from "react-icons/tb";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const RecomendationMob = ({el}) => {
    const [heart, setHeart] = useState(false)
    const [bag, setBag] = useState(false)
    const nav = useNavigate()
    const user = 1
    const data = {
        product: el.id,
        user: user
    }
    const data2 = {
        product: el.id,
        user: user,
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
        <div className="newPostopleniya--allMobile__cardMobile">
            <div className="newPostopleniya--allMobile__cardMobile--tel">
                <div className="newPostopleniya--allMobile__cardMobile--tel__h3">
                    <h3>Новое</h3>
                </div>
                <div className="newPostopleniya--allMobile__cardMobile--tel__imgs">
                    <img src={el.first_photo} alt="no img"/>
                    <IoMdHeart className="imgsHeart" onClick={addFav}
                               style={{color: `${heart ? 'red' : 'rgba(0, 0, 0, 0.35)'}`}}/>
                    <div className="newPostopleniya--allMobile__cardMobile--tel__available">
                        <h2>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd_960_4624)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                                        fill="#FF7300"/></g>
                                <defs>
                                    <filter id="filter0_dd_960_4624" x="-2"
                                        y="-2" width="26" height="26" filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dx="1" dy="1"/>
                                        <feGaussianBlur stdDeviation="1"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                                        <feBlend mode="normal"
                                            in2="BackgroundImageFix" result="effect1_dropShadow_960_4624"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dx="-1" dy="-1"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="effect1_dropShadow_960_4624"
                                            result="effect2_dropShadow_960_4624"/>
                                        <feBlend mode="normal" in="SourceGraphic"
                                            in2="effect2_dropShadow_960_4624" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                            В наличии
                        </h2>
                    </div>
                </div>
            </div>
            <div className="newPostopleniya--allMobile__cardMobile--descript">
                <div className="newPostopleniya--allMobile__cardMobile--descript__stars">
                    {stars}
                </div>
                <div className="newPostopleniya--allMobile__cardMobile--descript__title">
                    <h1>{el.name}</h1>
                </div>
                <div className="newPostopleniya--allMobile__cardMobile--descript__colors">
                    <h4>Цвет</h4>
                    <div className="newPostopleniya--allMobile__cardMobile--descript__colors--col">
                        {
                            el.color.map((el,inx)=>(
                                <canvas key={inx} style={{background:el}}></canvas>
                            ))
                        }
                    </div>
                </div>
                <div className="newPostopleniya--allMobile__cardMobile--descript__price">
                    <h1>{el.price} сом</h1>
                    {
                        bag ?  <TbShoppingBagCheck onClick={()=> nav('/headerBasket')} className="priceBasket"/> :  <TbShoppingBag onClick={addBasket} className="priceBasket"/>
                    }
                </div>
            </div>
        </div>
    );
};

export default RecomendationMob;