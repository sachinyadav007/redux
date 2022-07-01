import React from "react";
import { connect } from "react-redux";
function Ball(props) {
  // console.log("Props---->", props);
  return (
    <div>
      <h1> Number of balls {props.balls}</h1>

      <button onClick={props.Buy_ball}> Buy balls</button>
      <button onClick={props.sell_balls}> Sell ball</button>
    </div>
  );
}

const mapStatetoProps = (store) => {
  console.log("in map state");

  return store.Ball;
};

const mapDispatgcPRops = (dispatch) => {
  return {
    Buy_ball: () => {
      return dispatch({ type: "Buy_ball" });
    },

    sell_balls: () => {
      return dispatch({ type: "sell_balls" });
    },
  };
};

//  By the help of which
const HigherOrderCompontne = connect(mapStatetoProps, mapDispatgcPRops)(Ball);
export default HigherOrderCompontne;
