import {useEffect, useMemo, useState} from "react";
import { FaStar } from "react-icons/fa";
import "./review.scss";
import UseReview from "../userReview/useReview";
import axios from "axios";

const Review = ({name}) => {
    const [showUserReview, setShowUserReview] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [user,setUser] = useState([])

    useEffect(()=>{
        const getUser = async ()=>{
            const email = JSON.parse(localStorage.getItem("email"))
            const res = await axios(`https://oceanbackend.pythonanywhere.com/user/`)
            const {data} = await res
            setUser(data.find(user => user.email === email))
        }
        getUser()
    },[])

    function saveBtnReviewCard() {
        setShowUserReview(true);
    }

    async function getReviews(){
        const res = await axios(`https://oceanbackend.pythonanywhere.com/reviews/`)
        const {data} = await res
        setReviews(data)
    }
    useEffect(() => {
        getReviews()
    }, [reviews]);
    const reversedReviews = useMemo(() => reviews.slice().reverse(), [reviews]);

    return (
        <div id="review">
            <div className="container">
                <div className="review">
                    {showUserReview ? (
                        <UseReview name={name} user={user}/>
                    ) : (
                        <button onClick={saveBtnReviewCard}>
                            <svg width="31" height="29" viewBox="0 0 31 29"
                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="31" height="29"
                                    fill="url(#pattern0)"/>
                                <defs>
                                    <pattern id="pattern0"
                                        patternContentUnits="objectBoundingBox"
                                        width="1" height="1">
                                        <use xlinkHref="#image0_843_1856"
                                            transform="matrix(0.0103943 0 0 0.0111111 0.0322581 0)"/>
                                    </pattern>
                                    <image id="image0_843_1856" width="90" height="90"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADOUlEQVR4nO2dvW4TQRSFj4QgUFPwIypS8wbwCEiARB6BLiGZayPEj5wuoeQl6Kh4BIqAAlIooCciRCISFKHmoHWcFHHWO7M7Hnt3zidtE41nZj9fn52ZxAoghBBCCCGEEEIIkREc4CIdHtPwkQ5/aaAucOjC4QMNK1zGQjPJT3CDDl8kFlXFtVO4alLJkmzen+CdWpU9igvFhAU4cFgOF11kskQz0MFWHdGHEo1Q0Yd1RCs2LNyBRFuawpFok2h2KaZU0SbRnHUVqqJt9uIUHTZ7qcpok2jOuuJU0TZ7SYoOyzCjgzvqKJToNEh0IiQ6ERKdCIlOhEQnQqITIdE5ieYAF2h4RcNPOuzRYbP4mVf7lDs5j7lNw0+0joaTH7+pzaD2aYVvpvQTraMzK9NhP6h9WtH7Kf1E62j4kRx/7Y/A9imvHyn9ROuoJAo2AtunvDZS+onW0fDhVsg7etjseT0Mj9unjYx2PwxzgBKdBolOhEQngg6/6fCaDrf5FJf5EOe4imvhHSmjJ8I1XEIMJDoRjZd3HT/rmA/RGZx1zIfoDM465qWix3d4DntB7RNHSG1PDvfo8Hn0reJtGu7ONjqsW2cdo3kPSt64Z2lE53HWsV7R9/Opi+46NCx5vpHVsiW6HD7CeTq8jSJboicz3HIb3njJ7uF+eUeKjpiVvV3eiUSfQEOfa7jVQHb5d8Qlemx18auB7E+TBsh+1cHxJVy57MmZ/UCiw9fJYZXtMKgaKNuKZtVmxLeyqyTnLJrVkv0q27DkO2B2oukvuVJ2yKBZiWa45DiycxLN+pKby85FNJtLPr76dSfQedGMJdlndTFhEmzxtcseFudecstF77ZGcotF77ZKcitFO3znKm5OvKc+7tDwJ8J461Ekt060q5Z8cl/LWCh+U03Dwcwlt0q085d86v7exZZcZx6dh6FZHSuTc4NH8SHJ04Y9XFUlJ4J9XB9V9voosw+m+uATZ8SJMtkfruAKHV56tz9a+hXrbFVyCMP/kRIYAcWmJmgQgUL01lz8sXmXYQ+LNPw7tRaW7NjQ8KJk4+Gd2cIDOnw9JbmIkZXiAenzegE/aHhPw7eigquOTlPwH90olkq+OVZHAAAAAElFTkSuQmCC"
                                    />
                                </defs>
                            </svg>
                            Написать отзыв
                        </button>
                    )}
                    {
                        reversedReviews.length > 0 ?
                            reversedReviews.map(el => {
                            const starsCount = el.stars
                            const maxStars = 5
                            const stars = [];
                            for (let i = 0; i < maxStars; i++) {
                                stars.push(<FaStar key={i} className={i < starsCount ? "starsYellow" : "starsNone"} />);
                            }
                            return (
                                <div className="review--cardsPerson">
                                    <div className="review--card__about">
                                        <div className="review--card__about--title">
                                            <h1 className="aboutTitled">{user.username}</h1>
                                            <div className="review--cardabout--titlestars">
                                                {stars}
                                            </div>
                                        </div>
                                        <div className="review--cardabout--titledate">
                                            <span>{el.data.split('-').join('.')}</span>
                                        </div>
                                    </div>
                                    <p className="reviewTitled">{el.text}</p>
                                </div>
                            )
                        }) : <div className='review--none'><h4>Нету отзывов</h4></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;
