import img from '../../assets/details.svg'
import img2 from '../../assets/details2.svg'
import img3 from '../../assets/details3.svg'
import img4 from '../../assets/details4.svg'
import img5 from '../../assets/details5.svg'
import {FaStar} from "react-icons/fa";
import {IoMdHeart} from "react-icons/io";
import '../details/details.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Recomendation from "../../components/recomendation/Recomendation.jsx";
import Review from "../../components/review/review.jsx";
import PohojieTovary from "../../components/pohojieTovary/pohojieTovary.jsx";
import Brends from "../../components/Brends/Brends.jsx";

const Details = () => {
    return (
        <div id='details'>
            <div className="container">
                <div className="details">
                    <h6>Главная | Каталог | Iphone | Ipnone 14 Pro max</h6>
                    <div className="details--main">
                        <div className="details--main__slider">
                            <div className="details--main__slider--imgs">
                                {/*<div className="details--main__slider--imgs__m">*/}
                                {/*    <img src={img} alt=""/>*/}
                                {/*</div>*/}
                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                    <SwiperSlide>
                                        <div className="details--main__slider--imgs__m"><img src={img} alt=""/></div>
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
                                <p>Смартфон iPhone 14 в корпусе цвета Gold со встроенной памятью 128 Гб оснащен экраном диагональю 6,1 дюйма,
                                    выполненным по технологии OLED. Дисплей типа Super Retina XDR обладает разрешением <span>2532x1170 пикселей.
                                    В этой модели установлен шестиядерный процессор А15 Bionic. В девайсе</span>
                                    <button>Развернуть</button>
                                </p>
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
                               <h1>Apple IPhone 14 Pro Max </h1>
                           </div>
                            <div className="details--main__abouts--memory">
                                <p>Память</p>
                                <button>256 gb</button>
                                <button>512 gb</button>
                                <button>1 tb</button>
                            </div>
                            <div className="details--main__abouts--price">
                                <h1>74500 сом</h1>
                            </div>
                            <div className="details--main__abouts--btn">
                                <button>В корзину</button>
                                <IoMdHeart className="btnHeart" />
                            </div>

                            <div className="details--main__abouts--harakteristiki">
                                <h1>Характеристики:</h1>
                                <div className="details--main__abouts--harakteristiki__all">
                                    <div className="details--main__abouts--harakteristiki__all--title">
                                        <p>Гарантия</p>
                                        {/*<span>......................................................................................................</span>*/}
                                        <span className='sDottes'></span>
                                        <p className='details--main__abouts--harakteristiki__all--title__p'>1 год</p>
                                    </div>
                                    <div className="details--main__abouts--harakteristiki__all--title">
                                        <p>Экран</p>
                                        {/*<span>...............................................................................................................</span>*/}
                                        <span className='sDottes'></span>
                                        <p className='details--main__abouts--harakteristiki__all--title__p'>6,1*/2532*1170Пикс</p>
                                    </div>
                                    <div className="details--main__abouts--harakteristiki__all--title">
                                        <p>Технология экрана</p>
                                        {/*<span>.......................................................................</span>*/}
                                        <span className='sDottes'></span>
                                        <p className='details--main__abouts--harakteristiki__all--title__p'>OLED</p>
                                    </div>
                                    <div className="details--main__abouts--harakteristiki__all--title">
                                        <p>Тип процессора</p>
                                        {/*<span>...............................................................................</span>*/}
                                        <span className='sDottes'></span>
                                        <p className='details--main__abouts--harakteristiki__all--title__p'>A15
                                            Bionic</p>
                                    </div>
                                    <div className="details--main__abouts--harakteristiki__all--title">
                                        <p>Встроенная память (ROM)</p>
                                        {/*<span>.................................................</span>*/}
                                        <span className='sDottes'></span>
                                        <p className='details--main__abouts--harakteristiki__all--title__p'>256gb</p>
                                    </div>
                                    <div className="details--main__abouts--harakteristiki__all--title">
                                        <p>Основная камера</p>
                                        {/*<span>........................................................................</span>*/}
                                        <span className='sDottes'></span>
                                        <p className='details--main__abouts--harakteristiki__all--title__p'>6</p>
                                    </div>
                                    <div className="details--main__abouts--harakteristiki__all--title">
                                        <p>Разрешение видеосъемки</p>
                                        {/*<span>.............................................</span>*/}
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
    );
};

export default Details;