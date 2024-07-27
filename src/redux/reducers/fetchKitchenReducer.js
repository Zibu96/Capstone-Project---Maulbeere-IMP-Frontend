import {
  DELETE_KITCHEN,
  GET_KITCHEN_COMMUNICATION,
  GET_KITCHEN_TODO,
  POST_KITCHEN_COMMUNICATION,
  POST_KITCHEN_TODO,
} from "../actions/kitchenAction";

const initialState = {
  kitchen_toDo: {},
  kitchen_communication: {},
  kitchen: [],
};

const fetchKitchenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KITCHEN_TODO:
      return {
        ...state,
        kitchen_toDo: action.payload,
      };
    case GET_KITCHEN_COMMUNICATION:
      return {
        ...state,
        kitchen_communication: action.payload,
      };
    case POST_KITCHEN_TODO:
      return {
        ...state,
        kitchen_toDo: [...state.kitchen_toDo, action.payload],
      };
    case POST_KITCHEN_COMMUNICATION:
      return {
        ...state,
        kitchen_communication: [...state.kitchen_communication, action.payload],
      };
    case DELETE_KITCHEN:
      return {
        ...state,
        kitchen: [...state.kitchen, action.payload],
      };
    default:
      return state;
  }
};
export default fetchKitchenReducer;
