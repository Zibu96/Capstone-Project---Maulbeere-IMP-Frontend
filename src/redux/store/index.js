import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import fetchUserReducer from "../reducers/fetchUserReducer";
import fetchReservationReducer from "../reducers/fetchReservationReducer";
import fetchWorkShiftReducer from "../reducers/fetchWorkShiftReducer";

const rootReducer = combineReducers({
  user: fetchUserReducer,
  reservation: fetchReservationReducer,
  workShift: fetchWorkShiftReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
