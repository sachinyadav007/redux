import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/rootreducer";
import thunk from "redux-thunk";
console.log("Hello");
const store = createStore(rootReducer, applyMiddleware(thunk));

// import thunk from "redux-thunk";
// // import rootReducer from "./redux/rootReducer";
// console.log("Hello");
// const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
