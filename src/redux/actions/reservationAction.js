import axios from "axios";

export const GET_RESERVATION = "GET_RESERVATION";
export const POST_RESERVATION = "POST_RESERVATION";
export const DELETE_RESERVATION = "DELETE_RESERVATION";
export const GET_RESERVATION_TODAY = "GET_RESERVATION_TODAY";
export const PUT_RESERVATION = "PUT_RESERVATION";
export const GET_SINGLE_RESERVATION = "GET_SINGLE_RESERVATION";

export const fetchReservationAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/reservations",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_RESERVATION,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPostReservationAction = (token, newReservation) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/reservations",
        newReservation,

        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: POST_RESERVATION,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchDeleteReservationAction = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/reservations/ ${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: DELETE_RESERVATION,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchReservationTodayAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/reservations/today",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_RESERVATION_TODAY,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPutReservationAction = (token, modReservation, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/reservations/ ${id}`,
        modReservation,

        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: PUT_RESERVATION,
        payload: response.data,
      });
      await dispatch(fetchReservationAction(token));
      await dispatch(fetchReservationTodayAction(token));
      await dispatch(fetchSingleReservationAction(token));

      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchSingleReservationAction = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/reservations/ ${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_SINGLE_RESERVATION,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};
