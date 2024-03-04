import '../basket/basket.scss'
import Recomendation from "../../components/recomendation/Recomendation.jsx";

const Basket = () => {
    return (
        <div id='basket'>
            <div className="container">
                <div className="basket">
                    <div className="basket--none">
                        <h2>Ваша корзина пуста</h2>
                    </div>
                </div>
            </div>
            <Recomendation/>
        </div>
    );
};

export default Basket;