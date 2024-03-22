import "../basket/basket.scss";
import Header from "../../components/header/header.jsx";
import Order from "../../components/order/order.jsx";
import UserData from "../../components/userData/userData.jsx";
import Footer from "../../components/footer/footer.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import RecomendationSlice from "../../components/recomendation/RecomendationSlice.jsx";

const Basket = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname]);
    const [userData, setUserData] = useState(false);
    const [basket, setBasket] = useState([])
    const [user, setUser] = useState([])
    useEffect(() => {
        const getUser = async () => {
            const email = JSON.parse(localStorage.getItem("email"))
            const res = await axios(`https://oceanbackend.pythonanywhere.com/user/`)
            const {data} = await res
            setUser(data.find(user => user.email === email))
        }
        getUser()
    }, [])

    const getBasket = async () => {
        const res = await axios.get(`https://oceanbackend.pythonanywhere.com/basket`)
        const {data} = await res
        setBasket(data.filter(el => el.user === user.id))
    }
    useEffect(() => {
        getBasket()
    }, [basket]);
    return (
        <>
            <Header/>
            {basket.length !== 0 ? <Order basket={basket} setUserData={setUserData}/> : null}
            {userData ? <UserData/> : null}
            <div id="basket">
                <div className="container">
                    <div className="basket">
                        {basket.length === 0 ? (
                            <div className="basket--none">
                                <h2>Ваша корзина пуста</h2>
                            </div>
                        ) : null}
                    </div>
                </div>
                <RecomendationSlice/>
            </div>
            <Footer/>
        </>
    );
};

export default Basket;
