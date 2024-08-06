import { EVENT_ERROR } from "../actions/eventAction";
import { RESERVATION_ERROR } from "../actions/reservationAction";
import { LOGIN_ERROR, REGISTER_ERROR } from "../actions/usersAction";

const initialState = {
  login_error: null,
  register_error: null,
  reservation_error: null,
  event_error: null,
};

const fetchErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        login_error: action.payload,
      };
    case RESERVATION_ERROR:
      return {
        ...state,
        reservation_error: action.payload,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        register_error: action.payload,
      };
    case EVENT_ERROR:
      return {
        ...state,
        event_error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchErrorReducer;
