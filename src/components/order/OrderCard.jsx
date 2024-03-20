import "./order.scss";
import {FaStar} from "react-icons/fa";
import {useState} from "react";
const OrderCard = ({item}) => {
    const {product} = item
    const [count,setCount] = useState(item.count)
    const [price,setPrice] = useState(item.summ_products)
    const starsCount = product.stars
    const maxStars = 5
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
        stars.push(<FaStar key={i} className={i < starsCount ? "starsYellow" : "starsNone"} />);
    }
    const increment = ()=>{
        setCount(count + 1)
        setPrice(price + item.summ_products)
    }
    const decrement = ()=>{
        setCount((prevCount)=> prevCount !== 1 ? prevCount - 1 : 1)
        setPrice((prevPrice)=> prevPrice !== item.summ_products ? prevPrice - item.summ_products : item.summ_products)
    }
    return (
        <div className="order" key={item.id}>
            <div className="order-wrap">
                <div className="order-wrap__image">
                    <img src={product.first_photo} alt="iPhone"/>
                </div>
                <div className="order-wrap__info info">
                    <p>{product.name}</p>
                    <div className="info__button">
                        <button onClick={decrement}>-</button>
                        <h1>{count}</h1>
                        <button onClick={increment}>+</button>
                    </div>
                </div>
                <div className="order-wrap__price">
                    <h1>{price}</h1>
                    <h2>{price} с</h2>
                </div>
                <div className="order-wrap__stars">
                    {stars}
                </div>
            </div>
        </div>
    );
};

export default OrderCard;