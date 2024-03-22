import {FaStar} from "react-icons/fa";
import {IoMdHeart} from "react-icons/io";
import '../details/details.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Review from "../../components/review/review.jsx";
import PohojieTovary from "../../components/pohojieTovary/pohojieTovary.jsx";
import Brends from "../../components/Brends/Brends.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import PohojieSlice from "../../components/pohojieTovary/pohojieSlice.jsx";


const Details = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
    const {id} = useParams()
    const [el,setEl] = useState([])
    const [heart,setHeart] = useState(false)
    const [btnSlice,setBtnSlice] = useState(false)
    const nav = useNavigate()
    const data = {
        product: el.id,
        user: 1
    }
    const getData = async ()=>{
        const url = await axios(`https://oceanbackend.pythonanywhere.com/product/${id}/`)
        const {data} = await url
        setEl(data)
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
        getData()
    }, [el]);
    const starsCount = el.stars
    const maxStars = 5
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
        stars.push(<FaStar key={i} className={i < starsCount ? "starsYellow" : "starsNone"} />);
    }
    return (
        <>
            <Header/>
            <div id='details'>
                <div className="container">
                    <div className="details">
                        <h6>Главная | Каталог | {el.brand} | {el.name}</h6>
                        <div className="details--main">
                            <div className="details--main__slider">
                                <div className="details--main__slider--imgs">
                                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                        {
                                            el?.photos?.map((img,inx)=>(
                                                <SwiperSlide key={inx}>
                                                    <div className="details--main__slider--imgs__m"><img src={img} alt=""/></div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                    <div className="details--main__slider--imgs__i">
                                        {
                                            el?.photos?.map((img,inx)=> (
                                                <div key={inx} className="details--main__slider--imgs__i--one">
                                                    <img src={img} alt=""/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="details--main__slider--colors">
                                    <h4>Выбрать цвет</h4>
                                    <div className="details--main__slider--colors__canvas">
                                        {
                                            el?.color?.map((el,inx)=>(
                                                <canvas key={inx} style={{background:el}}></canvas>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="details--main__slider--description">
                                    <h1>Описание</h1>
                                    {
                                        el?.description?.length >= 140 ?
                                            btnSlice ? (<p>{el?.description}
                                                    <button onClick={() => setBtnSlice(false)}>закрыть</button>
                                                </p> ):
                                                (<p>{el?.description?.slice(0,130)}<span>{el?.description?.slice(130,130 + 30)}...</span>
                                                    <button onClick={()=> setBtnSlice(true)}>Развернуть</button>
                                                </p>)
                                            : <p>{el?.description}</p>
                                    }
                                </div>
                            </div>
                            <div className="details--main__abouts">
                                <div className="details--main__abouts--stars">
                                    {stars}
                                </div>
                                <div className="details--main__abouts--h1">
                                    <h1>{el.name}</h1>
                                </div>
                                {
                                    el?.characteristics?.memory ?
                                        <div className="details--main__abouts--memory">
                                            <p>Память</p>
                                            <button>{el?.characteristics?.memory}</button>
                                        </div> : null
                                }

                                <div className="details--main__abouts--price">
                                    <h1>{Math.round(el.price)} сом</h1>
                                </div>
                                <div className="details--main__abouts--btn">
                                    <button>В корзину</button>
                                    <IoMdHeart onClick={addFav} style={{color: `${heart ? 'red' : 'rgba(0, 0, 0, 0.35)'}`}} className="btnHeart" />
                                </div>

                                <div className="details--main__abouts--harakteristiki">
                                    {
                                        el?.characteristics?.length > 0 ? <h1>Характеристики:</h1> : null
                                    }

                                    <div className="details--main__abouts--harakteristiki__all">
                                        {
                                            el?.characteristics?.garanty ?
                                                <div className="details--main__abouts--harakteristiki__all--title">
                                                    <p>Гарантия</p>
                                                    <span className='sDottes'></span>
                                                    <p className='details--main__abouts--harakteristiki__all--title__p'>{el?.characteristics?.garanty}</p>
                                                </div>
                                                : null
                                        }
                                        {
                                            el?.characteristics?.display ?
                                                <div className="details--main__abouts--harakteristiki__all--title">
                                                    <p>Экран</p>
                                                    <span className='sDottes'></span>
                                                    <p className='details--main__abouts--harakteristiki__all--title__p'>{el?.characteristics?.display}</p>
                                                </div>
                                                : null
                                        }
                                        {
                                            el?.characteristics?.type_display ?
                                                <div className="details--main__abouts--harakteristiki__all--title">
                                                    <p>Технология экрана</p>
                                                    <span className='sDottes'></span>
                                                    <p className='details--main__abouts--harakteristiki__all--title__p'>{el?.characteristics?.type_display}</p>
                                                </div>
                                                : null
                                        }
                                        {
                                            el?.characteristics?.proses ?
                                                <div className="details--main__abouts--harakteristiki__all--title">
                                                    <p>Тип процессора</p>
                                                    <span className='sDottes'></span>
                                                    <p className='details--main__abouts--harakteristiki__all--title__p'>{el?.characteristics?.proses}</p>
                                                </div>
                                                : null
                                        }
                                        {
                                            el?.characteristics?.memory ?
                                                <div className="details--main__abouts--harakteristiki__all--title">
                                                    <p>Встроенная память (ROM)</p>
                                                    <span className='sDottes'></span>
                                                    <p className='details--main__abouts--harakteristiki__all--title__p'>{el?.characteristics?.memory}</p>
                                                </div>
                                                : null
                                        }
                                        {/*<div className="details--main__abouts--harakteristiki__all--title">*/}
                                        {/*    <p>Основная камера</p>*/}
                                        {/*    <span className='sDottes'></span>*/}
                                        {/*    <p className='details--main__abouts--harakteristiki__all--title__p'>6</p>*/}
                                        {/*</div>*/}
                                        {
                                            el?.characteristics?.kamera ?
                                                <div className="details--main__abouts--harakteristiki__all--title">
                                                    <p>Разрешение видеосъемки</p>
                                                    <span className='sDottes'></span>
                                                    <p className='details--main__abouts--harakteristiki__all--title__p'>{el?.characteristics?.kamera}</p>
                                                </div>
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Review/>
                <PohojieSlice brand={el.brand}/>
                <Brends/>
            </div>
            <Footer/>
        </>
    );
};

export default Details;