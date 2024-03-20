import "./order.scss";
import {FaStar} from "react-icons/fa";
import {useEffect, useState} from "react";
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
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data')) || [];
        const index = data.findIndex(item => item.name === product.name);
        if (index !== -1) {
            data[index] = {
                name: product.name,
                price: price,
                count: count
            };
        } else {
            data.push({
                name: product.name,
                price: price,
                count: count
            });
        }
        localStorage.setItem('data', JSON.stringify(data));
    }, [count, price]);

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
                    <h1>{price} с</h1>
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