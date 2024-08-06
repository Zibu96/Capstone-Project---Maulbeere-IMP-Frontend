import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import fetchUserReducer from "../reducers/fetchUserReducer";
import fetchReservationReducer from "../reducers/fetchReservationReducer";
import fetchWorkShiftReducer from "../reducers/fetchWorkShiftReducer";
import fetchWaitStaffReducer from "../reducers/fetchWaitStaffReducer";
import fetchKitchenReducer from "../reducers/fetchKitchenReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import fetchEventReducer from "../reducers/fetchEventReduce";
import fetchErrorReducer from "../reducers/fetchErrorReduce";

const rootReducer = combineReducers({
  user: fetchUserReducer,
  reservation: fetchReservationReducer,
  workShift: fetchWorkShiftReducer,
  waitStaff: fetchWaitStaffReducer,
  kitchen: fetchKitchenReducer,
  event: fetchEventReducer,
  error: fetchErrorReducer,
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: import.meta.env.VITE_APP_PERSIST_KEY,
    }),
  ],
  blacklist: ["error"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
