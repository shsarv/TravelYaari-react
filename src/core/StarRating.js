import React from 'react';
import ReactStars from "react-rating-stars-component";

export default function StarRating() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    const productrating = 4;
    return (

    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={20}
    isHalf={true}
    value={productrating}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
    )
}
