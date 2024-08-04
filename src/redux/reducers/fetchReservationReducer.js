import {
  DELETE_RESERVATION,
  GET_RESERVATION,
  GET_RESERVATION_BY_DATE,
  GET_RESERVATION_TODAY,
  GET_SINGLE_RESERVATION,
  POST_RESERVATION,
  PUT_RESERVATION,
} from "../actions/reservationAction";

const initialState = {
  reservation: {},
  reservation_signle: {},
  today: {},
  reservation_by_date: {},
};

const fetchReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATION:
      return {
        ...state,
        reservation: action.payload,
      };
    case POST_RESERVATION:
      return {
        ...state,
        reservation: [...state.reservation, action.payload],
      };
    case DELETE_RESERVATION:
      return {
        ...state,
        reservation: [...state.reservation, action.payload],
      };
    case GET_RESERVATION_TODAY:
      return {
        ...state,
        today: action.payload,
      };
    case PUT_RESERVATION:
      return {
        ...state,
        reservation: [...state.reservation, action.payload],
      };
    case GET_SINGLE_RESERVATION:
      return {
        ...state,
        reservation_single: action.payload,
      };
    case GET_RESERVATION_BY_DATE:
      return {
        ...state,
        reservation_by_date: action.payload,
      };
    default:
      return state;
  }
};
export default fetchReservationReducer;
