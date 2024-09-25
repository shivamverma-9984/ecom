import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";

const Rating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = parseInt(rating);
  const emptyStars = maxStars - fullStars;
  return (
    <div>
      {
        <div>
          {[...Array(fullStars)].map((_, index) => (
            <span key={index} className="text-yellow-500 text-2xl">
              ★
            </span>
          ))}

          {[...Array(emptyStars)].map((_, index) => (
            <span key={index + fullStars} className="text-2xl text-gray-400">
              ☆
            </span>
          ))}
        </div>
      }
    </div>
  );
};

export default Rating;
