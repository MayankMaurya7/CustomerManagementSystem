import { legacy_createStore } from "redux";
import customerDetailsReducer from "./customer-details/customerDetailsReducer";

const store = legacy_createStore(
    customerDetailsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

  export default store