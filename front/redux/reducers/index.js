import { combineReducers } from "redux";
import Login from "./login";
import Pedidos from "./pedidos";

export default combineReducers({
  user: Login,
  pedidos: Pedidos
});
