import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./Types";

export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.res.data });
  }
};

export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.res.data });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
