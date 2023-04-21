import { createStore } from "redux";
import RootReducer from "./reducers/RootReducer";

const store=createStore(RootReducer);

// console.warn("store data",store);

export default store;