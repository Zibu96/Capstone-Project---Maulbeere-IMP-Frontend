import axios from "axios";

export const GET_KITCHEN_TODO = "GET_KITCHEN_TODO";
export const GET_KITCHEN_COMMUNICATION = "GET_KITCHEN_COMMUNICATION";
export const POST_KITCHEN_TODO = "POST_KITCHEN_TODO";
export const POST_KITCHEN_COMMUNICATION = "POST_KITCHEN_COMMUNICATION";
export const DELETE_KITCHEN = "DELETE_KITCHEN";

export const fetchKitchenToDoAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/kitchen/todos",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_KITCHEN_TODO,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchKitchenCommunicationAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/kitchen/communications",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_KITCHEN_COMMUNICATION,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPostKitchenToDoAction = (token, newToDo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/kitchen/todos",
        newToDo,

        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: POST_KITCHEN_TODO,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPostKitchenCommunicationAction = (
  token,
  newCommunication
) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/kitchen/communications",
        newCommunication,

        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: POST_KITCHEN_COMMUNICATION,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchDeleteKitchenAction = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/kitchen/ ${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: DELETE_KITCHEN,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};
