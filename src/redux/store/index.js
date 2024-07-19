import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import fetchUserReducer from "../reducers/fetchUserReducer";
import fetchReservationReducer from "../reducers/fetchReservationReducer";

const rootReducer = combineReducers({
  user: fetchUserReducer,
  reservation: fetchReservationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
