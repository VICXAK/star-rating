import { SET_CONTENT } from "./rating-actions";
import data from "../../mock/data.json";

export const ratingReducer = (state = null, action) => {
  if (action.type === SET_CONTENT) {
    return (state = data.find((item) => item.star === action.value));
  }
  return state;
};
