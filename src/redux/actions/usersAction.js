import axios from "axios";

export const TOGGLE_IS_LOGGED = "TOGGLE_IS_LOGGED";
export const TOGGLE_AUTHORITY = "TOGGLE_AUTHORITY";
export const TOGGLE_IS_LOGGGED_FALSE = "TOGGLE_IS_LOGGGED_FALSE";

export const GET_USER_LOGGED_PROFILE = "GET_USER_LOGGED_PROFILE";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const GET_USER_LOGGED_TOKEN = "GET_USER_LOGGED_TOKEN";
export const GET_USER_ME = "GET_USER_ME";
export const PATCH_USER_ME_PASSWORD = "PATCH_USER_ME_PASSWORD";
export const PATCH_USER_ME_EMAIL = "PATCH_USER_ME_EMAIL";
export const POST_USER_REGISTER = "POST_USER_REGISTER";
export const GET_USER_ALL = "GET_USER_ALL";
export const GET_SINGLE_USER = "GET_SINGLE_USER";
export const DELETE_USER = "DELETE_USER";
export const RESET_STATE = "RESET_STATE";
export const RESET_ERROR = "RESET_ERROR";

export const fetchUserAction = (loginObject, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/auth/login",
        loginObject
      );
      dispatch({
        type: GET_USER_LOGGED_TOKEN,
        payload: response.data,
      });
      localStorage.setItem("Bearer", response.data.token);

      navigate("/home");
      dispatch(resetErrorAction());
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: LOGIN_ERROR,
        payload: "Credenziali non corrette, riprova a fare il login",
      });
    } finally {
      dispatch({
        type: TOGGLE_IS_LOGGGED_FALSE,
      });
    }
  };
};

export const logOutAction = () => {
  localStorage.removeItem("Bearer ");
  return async (dispatch) => {
    dispatch({ type: RESET_STATE });
  };
};

export const resetErrorAction = () => {
  return {
    type: RESET_ERROR,
  };
};

export const fetchUserRegisterAction = (registerObject, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/auth/register",
        registerObject,
        {
          headers: { Authorization: "Bearer " + token },
          "Content-Type": "application/json",
        }
      );
      dispatch({
        type: POST_USER_REGISTER,
        payload: response.data,
      });
      localStorage.setItem("Bearer", response.data.token);

      alert("Dipendente creato con successo");
      dispatch(resetErrorAction());
    } catch (err) {
      console.log(err);
      dispatch({
        type: REGISTER_ERROR,
        payload: err.response,
      });
    }
  };
};

export const fetchUserMeAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/users/me",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_USER_ME,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchUserModifyPasswordAction = (token, navigate, modPassword) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/users/me/passwords",
        modPassword,
        {
          headers: { Authorization: "Bearer " + token },
          "Content-Type": "application/json",
        }
      );
      dispatch({
        type: PATCH_USER_ME_PASSWORD,
        payload: response.data,
      });
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
};
export const fetchUserModifyEmailAction = (token, navigate, modEmail) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/users/me/emails",
        modEmail,
        {
          headers: { Authorization: "Bearer " + token },
          "Content-Type": "application/json",
        }
      );
      dispatch({
        type: PATCH_USER_ME_EMAIL,
        payload: response.data,
      });
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchAllUsersAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/users",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_USER_ALL,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchSingleUserAction = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/users/${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_SINGLE_USER,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchDeleteUserAction = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/users/ ${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: DELETE_USER,
        payload: response.data,
      });
      dispatch(fetchAllUsersAction(token));
    } catch (err) {
      console.log(err.message);
    }
  };
};
