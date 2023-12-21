import { combineReducers } from "redux";

import Auth from "./auth/reducers.ts";
import Layout from "./layout/reducers.ts";

export default combineReducers({
  Auth,
  Layout,
});
