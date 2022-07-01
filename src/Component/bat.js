import React, { useState } from "react";
import { connect } from "react-redux";
function Bat(props) {
  // const [bat, setBat] = useState(5);
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>Number of Bats : {props.quantity}</h1>
      <h2>It say's {props.dummyState}</h2>
      <input
        value={value}
        onChange={(e) => {
          // console.log(e.target.value)
          setValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          props.setBat(value);
          setValue("");
        }}
      >
        Buy Bat
      </button>
    </div>
  );
}
// 5 -> provide state variables from store

//  simple si baat hai isme hum isme hum global stroe milegi but hum bat component ko sirf bat wali
//  store provide kraynge jo bat ko need hai isliye isme hum stro.bat passs karenge
const mapStateToProps = (store) => {
  // console.log("in map state to prop", store);
  // state variables change
  return store.Bat;
};
// dispatch action provide to reducer
const mapDispatchtoProps = (dispatch) => {
  //    action
  // handler function
  return {
    setBat: (val) => {
      return dispatch({
        type: "buy_bat",
        // data send to reducer function
        payload: val,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Bat);
{/* <li
key={idx}
onClick={() => {
  props.deletask(idx);
}}
>
{" "}
{person.name}
</li> */}