import React, { useState } from "react";
import "./useReview.css";
import { IoMdStar } from "react-icons/io";
import { FaStar } from "react-icons/fa";

function UseReview() {
    const [textValue, setTextValue] = useState("");
    const [reviews, setReviews] = useState([]);

    function handleReviewSubmit() {
        if (textValue.trim() !== "") {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = (currentDate.getMonth() + 1)
                .toString()
                .padStart(2, "0");
            const day = currentDate.getDate().toString().padStart(2, "0");
            const currentDateString = `${year}.${month}.${day}`;
            const newReview = {
                id: Date.now(),
                text: textValue,
                date: currentDateString,
            };
            setReviews([...reviews, newReview]);
            setTextValue("");
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
                {reviews.map((review) => (
                    <div key={review.id} className="review--card">
                        <div className="review--card__about">
                            <div className="review--card__about--title">
                                <h1 className="review--card__about--titleh1">
                                    Айгерим Атамбекова
                                </h1>
                                <div className="review--cardabout--titlestars">
                                    <FaStar className="starsYellow" />
                                    <FaStar className="starsYellow" />
                                    <FaStar className="starsYellow" />
                                    <FaStar className="starsYellow" />
                                    <FaStar className="starsYellow" />
                                </div>
                            </div>
                            <div className="review--cardabout--titledate">
                                {review.date}
                            </div>
                        </div>
                        <h5 className="review--card__about--title__date">
                            {review.text}
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UseReview;
