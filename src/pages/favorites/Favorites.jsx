import "../favorites/favorites.scss";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import FavoritesCard from "./FavoritesCard.jsx";
import {useLocation} from "react-router-dom";
import RecomendationSlice from "../../components/recomendation/RecomendationSlice.jsx";



const Favorites = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
   const [favorite,setFavorite] = useState([])
    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get('https://oceanbackend.pythonanywhere.com/favorite/')
                const {data} = response
                setFavorite(data)
            } catch (error) {
                console.error('Ошибка при получении избранных:', error);
            }
        };
        fetchFavorites()
    }, [favorite])

    return (
        <>
            <Header/>
            <div id="favorites">
                <div className="container">
                    <h1 className='h1'>Избранное</h1>
                    <div className="favorites">
                        {
                            favorite.length > 0 ?
                                favorite.map(el => <FavoritesCard key={el.id} el={el}/>)
                                :
                                <div className="favorites--none"><h2>Пусто</h2></div>
                        }
                    </div>
                </div>
                <RecomendationSlice/>
                <Footer/>
            </div>
        </>
    );
};

export default Favorites;
