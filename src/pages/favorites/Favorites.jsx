import '../favorites/favorites.scss'
import Recomendation from "../../components/recomendation/Recomendation.jsx";
const Favorites = () => {
    return (
        <div id='favorites'>
            <div className="container">
                <div className="favorites">
                    <h1>Избранное</h1>
                    <div className="favorites--none">
                        <h2>Пусто</h2>
                    </div>
                </div>
            </div>
            <Recomendation/>
        </div>
    );
};

export default Favorites;