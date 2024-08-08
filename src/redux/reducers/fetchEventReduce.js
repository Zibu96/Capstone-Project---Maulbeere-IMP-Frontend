import {
  DELETE_EVENT,
  GET_EVENT,
  GET_EVENT_BY_DATE,
  GET_SINGLE_EVENT,
  POST_EVENT,
  PUT_EVENT,
} from "../actions/eventAction";

const initialState = {
  event: {},
  event_by_date: {},
  event_single: {},
};

const fetchEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case POST_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case DELETE_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case PUT_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case GET_EVENT_BY_DATE:
      return {
        ...state,
        event_by_date: action.payload,
      };
    case GET_SINGLE_EVENT:
      return {
        ...state,
        event_single: action.payload,
      };

    default:
      return state;
  }
};
export default fetchEventReducer;
