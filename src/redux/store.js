import { createStore } from "redux";
import rootReducers from "./action/reducer";

const Store = createStore(rootReducers);
export default Store;