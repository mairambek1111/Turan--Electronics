import img2 from '../../assets/details2.svg'
import img3 from '../../assets/details3.svg'
import img4 from '../../assets/details4.svg'
import img5 from '../../assets/details5.svg'
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
import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";


const Details = () => {
    const {id,category} = useParams()
    const [el,setEl] = useState([])
    const [heart,setHeart] = useState(false)
    const [btnSlice,setBtnSlice] = useState(false)
    const getData = async ()=>{
        const url = await axios(`http://localhost:3000/${category}/${id}`)
        const {data} = await url
        setEl(data)
    }
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
        getData()
        fetchData();
    }, [el]);
    return (
        <>
            <Header/>
            <div id='details'>
                <div className="container">
                    <div className="details">
                        <h6>Главная | Каталог | Iphone | Ipnone 14 Pro max</h6>
                        <div className="details--main">
                            <div className="details--main__slider">
                                <div className="details--main__slider--imgs">
                                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                        <SwiperSlide>
                                            <div className="details--main__slider--imgs__m"><img src={el.image} alt=""/></div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="details--main__slider--imgs__m"><img src={img2} alt=""/></div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="details--main__slider--imgs__m"><img src={img3} alt=""/></div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="details--main__slider--imgs__m"><img src={img4} alt=""/></div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="details--main__slider--imgs__m"><img src={img5} alt=""/></div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="details--main__slider--imgs__i">
                                        <div className="details--main__slider--imgs__i--one">
                                            <img src={img2} alt=""/>
                                        </div>
                                        <div className="details--main__slider--imgs__i--one">
                                            <img src={img3} alt=""/>
                                        </div>
                                        <div className="details--main__slider--imgs__i--one">
                                            <img src={img4} alt=""/>
                                        </div>
                                        <div className="details--main__slider--imgs__i--one">
                                            <img src={img5} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="details--main__slider--colors">
                                    <h4>Выбрать цвет</h4>
                                    <div className="details--main__slider--colors__canvas">
                                        <canvas></canvas>
                                        <canvas></canvas>
                                        <canvas></canvas>
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
                                    <FaStar className='starsYellow'/>
                                    <FaStar className='starsYellow'/>
                                    <FaStar className='starsNone'/>
                                    <FaStar className='starsNone'/>
                                    <FaStar className='starsNone'/>
                                </div>
                                <div className="details--main__abouts--h1">
                                    <h1>{el.title}</h1>
                                </div>
                                <div className="details--main__abouts--memory">
                                    <p>Память</p>
                                    <button>256 gb</button>
                                    <button>512 gb</button>
                                    <button>1 tb</button>
                                </div>
                                <div className="details--main__abouts--price">
                                    <h1>{el.price} сом</h1>
                                </div>
                                <div className="details--main__abouts--btn">
                                    <button>В корзину</button>
                                    <IoMdHeart onClick={addFav} style={{color: `${heart ? 'red' : 'rgba(0, 0, 0, 0.35)'}`}} className="btnHeart" />
                                </div>

                                <div className="details--main__abouts--harakteristiki">
                                    <h1>Характеристики:</h1>
                                    <div className="details--main__abouts--harakteristiki__all">
                                        <div className="details--main__abouts--harakteristiki__all--title">
                                            <p>Гарантия</p>
                                            <span className='sDottes'></span>
                                            <p className='details--main__abouts--harakteristiki__all--title__p'>1 год</p>
                                        </div>
                                        <div className="details--main__abouts--harakteristiki__all--title">
                                            <p>Экран</p>
                                            <span className='sDottes'></span>
                                            <p className='details--main__abouts--harakteristiki__all--title__p'>6,1*/2532*1170Пикс</p>
                                        </div>
                                        <div className="details--main__abouts--harakteristiki__all--title">
                                            <p>Технология экрана</p>
                                            <span className='sDottes'></span>
                                            <p className='details--main__abouts--harakteristiki__all--title__p'>OLED</p>
                                        </div>
                                        <div className="details--main__abouts--harakteristiki__all--title">
                                            <p>Тип процессора</p>
                                            <span className='sDottes'></span>
                                            <p className='details--main__abouts--harakteristiki__all--title__p'>A15
                                                Bionic</p>
                                        </div>
                                        <div className="details--main__abouts--harakteristiki__all--title">
                                            <p>Встроенная память (ROM)</p>
                                            <span className='sDottes'></span>
                                            <p className='details--main__abouts--harakteristiki__all--title__p'>256gb</p>
                                        </div>
                                        <div className="details--main__abouts--harakteristiki__all--title">
                                            <p>Основная камера</p>
                                            <span className='sDottes'></span>
                                            <p className='details--main__abouts--harakteristiki__all--title__p'>6</p>
                                        </div>
                                        <div className="details--main__abouts--harakteristiki__all--title">
                                            <p>Разрешение видеосъемки</p>
                                            <span className='sDottes'></span>
                                            <p className='details--main__abouts--harakteristiki__all--title__p'>3840/2160
                                                Пикс(4K)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Review/>
                <PohojieTovary/>
                <Brends/>
            </div>
            <Footer/>
        </>
    );
};

export default Details;