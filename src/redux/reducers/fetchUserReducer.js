import {
  TOGGLE_IS_LOGGED,
  TOGGLE_AUTHORITY,
  GET_USER_LOGGED_TOKEN,
  GET_USER_LOGGED_PROFILE,
  GET_USER_ME,
  PATCH_USER_ME_PASSWORD,
  PATCH_USER_ME_EMAIL,
  POST_USER_REGISTER,
} from "../actions/usersAction";

const initialState = {
  isLogged: false,
  isAdmin: false,
  user_bearer: "",
  user_info: {},
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOGGED:
      return {
        ...state,
        isLogged: true,
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

    default:
      return state;
  }
};

export default fetchUserReducer;
