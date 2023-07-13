export const hoverReducer = (state = null, action) => {
  if (action.type === "SET_HOVER") {
    state = action.isHover;
  }
  return state;
};
