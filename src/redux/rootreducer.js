import { combineReducers } from "redux";
import BatReducer from "./bat/BatReducer";
import BallReducer from "./ball/Ballreducer";
import TudoReducer from "./Tudo/tudoreducer";
import UserReducer from "./User/userreducer";

console.log("root Reducer");
// merged store
const rootReducer = combineReducers({
  Ball: BallReducer,
  Bat: BatReducer,
  Tudo: TudoReducer,
  User: UserReducer,
});
export default rootReducer;
