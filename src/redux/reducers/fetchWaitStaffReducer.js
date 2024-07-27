import {
  DELETE_WAITSTAFF,
  GET_WAITSTAFF_COMMUNICATION,
  GET_WAITSTAFF_TODO,
  POST_WAITSTAFF_COMMUNICATION,
  POST_WAITSTAFF_TODO,
} from "../actions/waitStaffAction";

const initialState = {
  waitStaff_toDo: {},
  waitStaff_communication: {},
  waitStaff: [],
};

const fetchWaitStaffReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WAITSTAFF_TODO:
      return {
        ...state,
        waitStaff_toDo: action.payload,
      };
    case GET_WAITSTAFF_COMMUNICATION:
      return {
        ...state,
        waitStaff_communication: action.payload,
      };
    case POST_WAITSTAFF_TODO:
      return {
        ...state,
        waitStaff_toDo: [...state.waitStaff_toDo, action.payload],
      };
    case POST_WAITSTAFF_COMMUNICATION:
      return {
        ...state,
        waitStaff_communication: [
          ...state.waitStaff_communication,
          action.payload,
        ],
      };
    case DELETE_WAITSTAFF:
      return {
        ...state,
        waitStaff: [...state.waitStaff, action.payload],
      };
    default:
      return state;
  }
};
export default fetchWaitStaffReducer;
