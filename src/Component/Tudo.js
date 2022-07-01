import React, { useState } from "react";

import { connect } from "react-redux";
function Tudo(props) {
  console.log(" in Tudeo app->>>>>", props.task.length);
  console.log(props);
  const [value, setValue] = useState("");

  return (
    <div>
      <h1> in Tudo app</h1>
      <h1> Implemented Tudu</h1>

      <input
        value={value}
        onChange={(e) => {
          // console.log(e.target.value)
          setValue(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          props.AddTask(value);
          setValue("");
        }}
      >
        ADD TASK
      </button>

      <div>
        <ul>
          {
            // console.log(props.task)
            props.task.map((person, idx) => {
              console.log(person, " in  person object");
              // console.log(person.task, " in props person object");
              console.log(props.task, " in props");
              return (
                <li
                  key={idx}
                  onClick={() => {
                    props.deletask(person.id);
                  }}
                >
                  {" "}
                  {person.task}
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

//  taki hum state excess kr payien  in tudo by the help of this function
const mapstatetoProps = (store) => {
  // console.log(" IN MAP STROE");de
  return store.Tudo;
};

//  task add task function hume tudo m mil jayien by props
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    AddTask: (val) => dispatch({ type: "AddTask", currentTask: val }),
    deletask: (idx) => dispatch({ type: "deletask", idx: idx }),
  };
};

const HigherOrderCompontne = connect(mapstatetoProps, mapDispatchToProps)(Tudo);
export default HigherOrderCompontne;
