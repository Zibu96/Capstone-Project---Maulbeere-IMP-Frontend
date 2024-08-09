import axios from "axios";

export const GET_ALL_LUNCH = "GET_ALL_LUNCH";
export const POST_LUNCH = "POST_LUNCH";
export const GET_ALL_DINNER = "GET_ALL_DINNER";
export const POST_DINNER = "POST_DINNER";
export const GET_ALL_WEEK = "GET_ALL_WEEK";
export const POST_WEEK = "POST_WEEK";
import { daysOfWeek } from "../../constants/daysOfWeek";

export const fetchLunchAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/lunches",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_ALL_LUNCH,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPostLunchAction = (token, lunchObject) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/lunches",
        lunchObject,
        {
          headers: { Authorization: "Bearer " + token },
          "Content-Type": "application/json",
        }
      );
      dispatch({
        type: POST_LUNCH,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchDinnerAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/dinners",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_ALL_DINNER,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPostDinnerAction = (token, dinnerObject) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/dinners",
        dinnerObject,
        {
          headers: { Authorization: "Bearer " + token },
          "Content-Type": "application/json",
        }
      );
      dispatch({
        type: POST_DINNER,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
export const fetchWeekAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/weeks",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      if (Array.isArray(response.data.content)) {
        const sortedData = response.data.content.sort((a, b) => {
          return (
            daysOfWeek.indexOf(a.weekDays) - daysOfWeek.indexOf(b.weekDays)
          );
        });

        dispatch({
          type: GET_ALL_WEEK,
          payload: sortedData,
        });
      } else {
        console.error("I dati ricevuti non sono un array:", response.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPostWeekAction = (token, weekObject) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/weeks",
        weekObject,
        {
          headers: { Authorization: "Bearer " + token },
          "Content-Type": "application/json",
        }
      );
      dispatch({
        type: POST_WEEK,
        payload: response.data,
      });
      dispatch(fetchWeekAction(token));
    } catch (err) {
      console.log(err.message);
    }
  };
};
