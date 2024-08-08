import axios from "axios";
export const GET_EVENT = "GET_EVENT";
export const POST_EVENT = "POST_EVENT";
export const PUT_EVENT = "PUT_EVENT";
export const GET_EVENT_BY_DATE = "GET_EVENT_BY_DATE";
export const DELETE_EVENT = "DELETE_EVENT";
export const EVENT_ERROR = "EVENT_ERROR";
export const GET_SINGLE_EVENT = "GET_SINGLE_EVENT";

export const fetchEventAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/events",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_EVENT,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPostEventAction = (token, newEvent, handleCloseEvent) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/events",
        newEvent,

        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: POST_EVENT,
        payload: response.data,
      });
      console.log(response.data);
      alert("Evento creato con successo");
      handleCloseEvent();
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: EVENT_ERROR,
        payload: err.response,
      });
    }
  };
};

export const fetchPutEventsAction = (
  token,
  modEvents,
  id,
  handleCloseEvent
) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/events/${id}`,
        modEvents,

        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: PUT_EVENT,
        payload: response.data,
      });
      await dispatch(fetchEventAction(token));
      console.log(response.data);
      alert("Evento creato con successo");
      handleCloseEvent();
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: EVENT_ERROR,
        payload: err.response,
      });
    }
  };
};

export const fetchEventByDateAction = (token, date) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/events/dates/${date}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_EVENT_BY_DATE,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchDeleteEventAction = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/events/${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: DELETE_EVENT,
        payload: response.data,
      });
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
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/events/ ${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_SINGLE_EVENT,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};
