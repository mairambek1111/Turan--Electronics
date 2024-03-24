import {useState} from "react";
import "./useReview.css";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function UseReview({name,user}) {
    const [textValue, setTextValue] = useState("");

    async function handleReviewSubmit() {
        const star = prompt('Оцените товар от 1 до 5')
        if(star !== "" && star <= 5) {
            if (textValue.trim() !== "") {
                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month = (currentDate.getMonth() + 1)
                    .toString()
                    .padStart(2, "0");
                const day = currentDate.getDate().toString().padStart(2, "0");
                const currentDateString = `${day}.${month}.${year}`;

                const dataPost = {
                    id:user.id,
                    user: user.username,
                    text: textValue,
                    stars: star,
                    product: name,
                    data: currentDateString
                }
                await axios.post(`https://oceanbackend.pythonanywhere.com/reviews/`,dataPost)
                setTextValue("");
            }
        }
    }
    return (
        <div>
            <div className="container">
                <textarea
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    cols="50"
                    rows="5"
                    className="review--card"
                    placeholder="Напишите свой отзыв..."
                ></textarea>

                <br />

                <button className="btnReview" onClick={handleReviewSubmit}>
                    Отправить отзыв
                </button>
            </div>
        </div>
    );
}

export default UseReview;
