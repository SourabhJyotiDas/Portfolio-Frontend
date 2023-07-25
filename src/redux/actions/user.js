import axios from "axios";
axios.defaults.withCredentials = true;

const backendUrl = "";
// const backendUrl = "https://sourabh-portfolio-backend.vercel.app";

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "RegisterRequest",
    });

    const { data } = await axios.post(`${backendUrl}/api/v1/register`, { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
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

    const { data } = await axios.get(`${backendUrl}/api/v1/me`);

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

    const { data } = await axios.post(`${backendUrl}/api/v1/login`, { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
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
    const { data } = await axios.get(`${backendUrl}/api/v1/logout`);

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



