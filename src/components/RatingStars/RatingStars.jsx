import React from 'react';
import { TbStarFilled, TbStar } from "react-icons/tb";
import styles from './RatingStars.module.css';
export default function RatingStars({rating}) {
    let stars = [];
    
    (function displayStars(rating) {       
        for(let i = 1 ; i <= 5 ; i++) {
            i <= rating
            ? stars.push(1)
            : stars.push(0)
        }
    })(rating)

    return (
        <div className={styles.stars}>
            {
                stars.map((el, index) => (
                    el === 1
                    ? (<TbStarFilled key={index} />)
                    : (<TbStar key={index} />)
                ))
            }
        </div>
    )
}
