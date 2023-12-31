import axios from "axios";
import { server } from "../store";

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "RegisterRequest",
    });

    const { data } = await axios.post(`${server}/register`, { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      },
    );

    dispatch({
      type: "RegisterSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "RegisterFailure",
      payload: error.response.data.message,
    });
  }
};


export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const { data } = await axios.get(`${server}/me`, { withCredentials: true });

    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,
    });
  }
};



export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(`${server}/login`, { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      },
    );

    dispatch({
      type: "LoginSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};


export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });
    const { data } = await axios.get(`${server}/logout`, { withCredentials: true });

    dispatch({
      type: "LogoutUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response.data.message,
    });
  }
};



