import {
  DELETE_KITCHEN,
  DELETE_KITCHEN_SHOPPING_LIST,
  GET_KITCHEN_COMMUNICATION,
  GET_KITCHEN_SHOPPING_LIST,
  GET_KITCHEN_TODO,
  POST_KITCHEN_COMMUNICATION,
  POST_KITCHEN_SHOPPING_LIST,
  POST_KITCHEN_TODO,
} from "../actions/kitchenAction";

const initialState = {
  kitchen_toDo: {},
  kitchen_communication: {},
  kitchen_shoppingList: {},
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
        kitchen_toDo: action.payload,
      };
    case POST_KITCHEN_COMMUNICATION:
      return {
        ...state,
        kitchen_communication: action.payload,
      };
    case DELETE_KITCHEN:
      return {
        ...state,
        kitchen: action.payload,
      };
    case GET_KITCHEN_SHOPPING_LIST:
      return {
        ...state,
        kitchen_shoppingList: action.payload,
      };
    case POST_KITCHEN_SHOPPING_LIST:
      return {
        ...state,
        kitchen_shoppingList: action.payload,
      };
    case DELETE_KITCHEN_SHOPPING_LIST:
      return {
        ...state,
        kitchen_shoppingList: action.payload,
      };
    default:
      return state;
  }
};
export default fetchKitchenReducer;
