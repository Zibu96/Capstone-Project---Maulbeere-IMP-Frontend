import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import fetchUserReducer from "../reducers/fetchUserReducer";
import fetchReservationReducer from "../reducers/fetchReservationReducer";
import fetchWorkShiftReducer from "../reducers/fetchWorkShiftReducer";
import fetchWaitStaffReducer from "../reducers/fetchWaitStaffReducer";
import fetchKitchenReducer from "../reducers/fetchKitchenReducer";

const rootReducer = combineReducers({
  user: fetchUserReducer,
  reservation: fetchReservationReducer,
  workShift: fetchWorkShiftReducer,
  waitStaff: fetchWaitStaffReducer,
  kitchen: fetchKitchenReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
