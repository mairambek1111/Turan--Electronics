import { RiStarSFill } from "react-icons/ri";
import phone from "../../assets/newPost--iphone.svg";
import "./order.scss";

function Order({setUserData}) {
    return (
        <div>
            <div className="container">
                <div className="order__wrap">
                    <div className="order">
                        <h1 className="order__title">Корзина</h1>
                        <button className="order__delete">Удалить все </button>
                    </div>
                    <div className="order__content">
                        <div className="order__card">
                            <img src={phone} alt="" className="order__image" />
                            <div className="order__card__info">
                                <h1 className="order__card__title">
                                    Смартфон Apple Iphone 14 Pro <br /> max 256GB
                                </h1>
                                <div className="order__card__quantity">
                                    <h2 className="order__card__quantity__minus">-</h2>
                                    <h2 className="order__card__quantity__nums">1</h2>
                                    <h2 className="order__card__quantity__plus">+</h2>
                                </div>
                            </div>
                            <div className="price">
                                <h1 className="price__real">74500c</h1>
                                <h3 className="price__prev">81000c</h3>
                            </div>
                            <div className="stars">
                                <RiStarSFill color="rgba(255, 115, 0, 1)" fontSize={25} />
                                <RiStarSFill color="rgba(255, 115, 0, 1)" fontSize={25} />

                                <RiStarSFill fontSize={25} />
                                <RiStarSFill fontSize={25} />
                                <RiStarSFill fontSize={25} />
                            </div>
                        </div>
                        <div className="order__card">
                            <img src={phone} alt="" className="order__image" />
                            <div className="order__card__info">
                                <h1 className="order__card__title">
                                    Смартфон Apple Iphone 14 Pro <br /> max 256GB
                                </h1>
                                <div className="order__card__quantity">
                                    <h2 className="order__card__quantity__minus">-</h2>
                                    <h2 className="order__card__quantity__nums">1</h2>
                                    <h2 className="order__card__quantity__plus">+</h2>
                                </div>
                            </div>
                            <div className="price">
                                <h1 className="price__real">74500c</h1>
                                <h3 className="price__prev">81000c</h3>
                            </div>
                            <div className="stars">
                                <RiStarSFill color="rgba(255, 115, 0, 1)" fontSize={25} />
                                <RiStarSFill color="rgba(255, 115, 0, 1)" fontSize={25} />

                                <RiStarSFill fontSize={25} />
                                <RiStarSFill fontSize={25} />
                                <RiStarSFill fontSize={25} />
                            </div>
                        </div>
                    </div>
                    <button onClick={()=> setUserData(true)} className="order__btn">Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default Order;
