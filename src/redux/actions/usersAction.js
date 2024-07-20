import axios from "axios";

export const TOGGLE_IS_LOGGED = "TOGGLE_IS_LOGGED";
export const TOGGLE_AUTHORITY = "TOGGLE_AUTHORITY";

export const GET_USER_LOGGED_PROFILE = "GET_USER_LOGGED_PROFILE";
export const GET_USER_LOGGED_TOKEN = "GET_USER_LOGGED_TOKEN";
export const GET_USER_ME = "GET_USER_ME";
export const PATCH_USER_ME_PASSWORD = "PATCH_USER_ME_PASSWORD";
export const PATCH_USER_ME_EMAIL = "PATCH_USER_ME_EMAIL";
export const POST_USER_REGISTER = "POST_USER_REGISTER";

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
      console.log(response.data);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
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
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
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
      console.log(response.data);
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
      console.log(response.data);
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
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};
