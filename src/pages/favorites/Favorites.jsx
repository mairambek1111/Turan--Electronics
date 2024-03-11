import "../favorites/favorites.scss";
import Recomendation from "../../components/recomendation/Recomendation.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import {useSelector} from "react-redux";
import NewPostupleniyaCard from "../../components/newPostupleniya/newPostupleniyaCard.jsx";

const Favorites = () => {
    const {favorite} = useSelector(s => s.favorite)
    return (
        <>
            <Header/>
            <div id="favorites">
                <div className="container">
                    <h1 className='h1'>Избранное</h1>
                    <div className="favorites">
                        {
                            favorite.length > 0 ?
                                favorite.map(el => <NewPostupleniyaCard key={el.id} el={el}/>)
                                :
                                <div className="favorites--none"><h2>Пусто</h2></div>
                        }
                    </div>
                </div>
                <Recomendation/>
                <Footer/>
            </div>
        </>
    );
};

export default Favorites;
