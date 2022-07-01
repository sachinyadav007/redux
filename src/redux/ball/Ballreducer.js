let inialstate = {
  balls: 5,
};
function BallReducer(state = inialstate, action) {
  switch (action.type) {
    case "Buy_ball":
      let nestate = {
        balls: state.balls - 1,
      };
      return nestate;

    case "sell_balls":
      let newState = {
        balls: state.balls + 1,
      };
      return newState;

    default:
      return state;
  }
}

// const store = createStore(BallReducer);
export default BallReducer;
