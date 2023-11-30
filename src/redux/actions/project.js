import axios from "axios";
import { server } from "../store.js";

export const getAllProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProjectsRequest",
    });

    const { data } = await axios.get(`${server}/getallproject`, { withCredentials: true });

    dispatch({
      type: "getAllProjectsSuccess",
      payload: data.projects
    });
  } catch (error) {
    dispatch({
      type: "getAllProjectsFail",
      payload: error.response.data.message,
    });
  }
};



export const createNewProject = (title, description, liveLink, githubLink, techStack, image) => async (dispatch) => {
  try {
    dispatch({
      type: "newProjectRequest",
    });

    const { data } = await axios.post(`${server}/upload`, { title, description, liveLink, githubLink, techStack, image },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      }
    );

    dispatch({
      type: "newProjectSuccess",
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: "newProjectFail",
      payload: error.response.data.message,
    });
  }
};





export const updateProject = (title, description, liveLink, githubLink, techStack, image, id) => async (dispatch) => {
  try {
    dispatch({
      type: "updateProjectRequest",
    });

    const { data } = await axios.put(`${server}/update/${id}`, { title, description, liveLink, githubLink, techStack, image },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      }
    );

    dispatch({
      type: "updateProjectSuccess",
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: "updateProjectFail",
      payload: error.response.data.message,
    });
  }
};




export const deleteMyProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProjectRequest",
    });

    const { data } = await axios.delete(`${server}/delete/${id}`, { withCredentials: true });

    dispatch({
      type: "deleteProjectSuccess",
      payload: data.message,
    });

  } catch (error) {
    dispatch({
      type: "deleteProjectFailure",
      payload: error.response.data.message,
    });
  }
};