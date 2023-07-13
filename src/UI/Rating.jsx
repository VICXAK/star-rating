import React from "react";
import { FaStar } from "react-icons/fa";

import { setContent } from "../store/rating/rating-actions";
import { setHover } from "../store/hover/hover-actions";
import {
  selectStarContent,
  selectStarNumber,
} from "../store/rating/rating-selector";
import { selectHover } from "../store/hover/hover-selector";
import { useSelector, useDispatch } from "react-redux";

const Rating = () => {
  const dispatch = useDispatch();
  const content = useSelector(selectStarContent);
  const clickedStar = useSelector(selectStarNumber);
  const isHover = useSelector(selectHover);

  const stars = [...Array(5)].map((_, i) => {
    const currentValue = i + 1;

    return (
      <label key={currentValue}>
        <input type="radio" name="rating" value={currentValue} />
        <FaStar
          className={
            currentValue <= (isHover || clickedStar)
              ? "star-rating__star marked"
              : "star-rating__star unmarked"
          }
          onClick={() => dispatch(setContent(currentValue))}
          onMouseEnter={() => dispatch(setHover(currentValue))}
          onMouseLeave={() => dispatch(setHover(null))}
        />
      </label>
    );
  });

  return (
    <div className="star-rating__content">
      <p className="star-rating__title">
        How many stars would you give to our Online Code Editor?
      </p>
      <div className="star-rating__wrapper">{stars}</div>
      <p
        className={
          content !== undefined
            ? "star-rating__description show"
            : "star-rating__description"
        }
      >
        {content}
      </p>
    </div>
  );
};

export default Rating;
