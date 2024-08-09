import axios from "axios";

export const GET_WAITSTAFF_TODO = "GET_WAITSTAFF_TODO";
export const POST_WAITSTAFF_TODO = "POST_WAITSTAFF_TODO";
export const GET_WAITSTAFF_COMMUNICATION = "GET_WAITSTAFF_COMMUNICATION";
export const POST_WAITSTAFF_COMMUNICATION = "POST_WAITSTAFF_COMMUNICATION";
export const DELETE_WAITSTAFF = "DELETE_WAITSTAFF";
export const GET_WAITSTAFF_SHOPPING_LIST = "GET_WAITSTAFF_SHOPPING_LIST";
export const POST_WAITSTAFF_SHOPPING_LIST = "POST_WAITSTAFF_SHOPPING_LIST";
export const DELETE_WAITSTAFF_SHOPPING_LIST = "DELETE_WAITSTAFF_SHOPPING_LIST";

export const fetchWaitStaffToDoAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/waitstaff/todos",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_WAITSTAFF_TODO,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchWaitStaffCommunicationAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/waitstaff/communications",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_WAITSTAFF_COMMUNICATION,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPostWaitStaffToDoAction = (token, newToDo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/waitstaff/todos",
        newToDo,

        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: POST_WAITSTAFF_TODO,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPostWaitStaffCommunicationAction = (
  token,
  newCommunication
) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/waitstaff/communications",
        newCommunication,

        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: POST_WAITSTAFF_COMMUNICATION,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchDeleteWaitStaffAction = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/waitstaff/ ${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: DELETE_WAITSTAFF,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchWaitStaffShoppingListAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/waitstaff/shoppingLists",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: GET_WAITSTAFF_SHOPPING_LIST,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchPostShoppingListsAction = (token, newShoppingList) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/waitstaff/shoppingLists",
        newShoppingList,

        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: POST_WAITSTAFF_SHOPPING_LIST,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchDeleteShoppingListAction = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://implicit-geralda-giovannighirardelli-311f3521.koyeb.app/waitstaff/shoppingLists/ ${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({
        type: DELETE_WAITSTAFF_SHOPPING_LIST,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
