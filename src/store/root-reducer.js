import { combineReducers } from "redux";

import { ratingReducer } from "./rating/rating-reducer";
import { hoverReducer } from "./hover/hover-reducer";

export const rootReducer = combineReducers({
  rating: ratingReducer,
  hover: hoverReducer,
});
