import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/reducers";
import thunk from "redux-thunk";
import { fetchCandidates } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchCandidates());
export { store };
