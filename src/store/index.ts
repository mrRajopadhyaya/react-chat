import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducers";

const configureStore = () => {
  const store = createStore(rootReducer(), applyMiddleware(thunk));
  return store;
};

const store = configureStore();
export default store;
