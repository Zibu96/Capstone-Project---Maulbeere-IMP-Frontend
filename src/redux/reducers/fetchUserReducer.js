import {
  TOGGLE_IS_LOGGED,
  TOGGLE_AUTHORITY,
  GET_USER_LOGGED_TOKEN,
  GET_USER_LOGGED_PROFILE,
  GET_USER_ME,
  PATCH_USER_ME_PASSWORD,
  PATCH_USER_ME_EMAIL,
  POST_USER_REGISTER,
  GET_USER_ALL,
  GET_SINGLE_USER,
  DELETE_USER,
  RESET_STATE,
  LOGIN_ERROR,
} from "../actions/usersAction";

const initialState = {
  isLogged: false,
  isAdmin: false,
  user_bearer: "",
  user_info: {},
  user_list: {},
  user: {},
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOGGED:
      return {
        ...state,
        isLogged: true,
      };
    case RESET_STATE:
      return {
        state: initialState,
      };
    case GET_USER_LOGGED_TOKEN:
      return {
        ...state,
        user_bearer: action.payload,
      };
    case GET_USER_LOGGED_PROFILE:
      return {
        ...state,
        user_info: action.payload,
      };
    case TOGGLE_AUTHORITY:
      return {
        ...state,
        state: action.payload,
      };
    case POST_USER_REGISTER:
      return {
        ...state,
        state: action.payload,
      };
    case GET_USER_ME:
      return {
        ...state,
        state: action.payload,
      };
    case PATCH_USER_ME_PASSWORD:
      return {
        ...state,
        state: action.payload,
      };
    case PATCH_USER_ME_EMAIL:
      return {
        ...state,
        state: action.payload,
      };
    case GET_USER_ALL:
      return {
        ...state,
        user_list: action.payload,
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default fetchUserReducer;
