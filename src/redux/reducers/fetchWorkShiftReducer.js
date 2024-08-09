import {
  GET_ALL_DINNER,
  GET_ALL_LUNCH,
  GET_ALL_WEEK,
  POST_DINNER,
  POST_LUNCH,
  POST_WEEK,
} from "../actions/workShiftAction";

const initialState = {
  lunch: {},
  dinner: {},
  workShift: {},
};

const fetchWorkShiftReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LUNCH:
      return {
        ...state,
        lunch: action.payload,
      };
    case POST_LUNCH:
      return {
        ...state,
        lunch: action.payload,
      };
    case GET_ALL_DINNER:
      return {
        ...state,
        dinner: action.payload,
      };
    case POST_DINNER:
      return {
        ...state,
        dinner: action.payload,
      };
    case GET_ALL_WEEK:
      return {
        ...state,
        workShift: action.payload,
      };
    case POST_WEEK:
      return {
        ...state,
        workShift: action.payload,
      };
    default:
      return state;
  }
};
export default fetchWorkShiftReducer;
