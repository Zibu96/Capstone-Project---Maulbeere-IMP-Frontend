import {
  GET_ALL_DINNER,
  GET_ALL_LUNCH,
  POST_DINNER,
  POST_LUNCH,
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
        lunch: [...state.reservation, action.payload],
      };
    case GET_ALL_DINNER:
      return {
        ...state,
        dinner: action.payload,
      };
    case POST_DINNER:
      return {
        ...state,
        lunch: [...state.reservation, action.payload],
      };
    default:
      return state;
  }
};
export default fetchWorkShiftReducer;
