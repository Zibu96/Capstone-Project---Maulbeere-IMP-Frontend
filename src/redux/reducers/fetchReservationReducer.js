import {
  DELETE_RESERVATION,
  GET_RESERVATION,
  POST_RESERVATION,
} from "../actions/reservationAction";

const initialState = {
  reservation: {},
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
    default:
      return state;
  }
};
export default fetchReservationReducer;
