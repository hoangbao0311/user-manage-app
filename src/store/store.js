import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/todoReducer"; // Chỉ định rootReducer của bạn

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
