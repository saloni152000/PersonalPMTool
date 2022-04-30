import axios from "axios";
import { GET_ERRORS } from "./types";
import { useNavigate } from "react-router-dom";

export const createProject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/project", project);
    const navigate = useNavigate();
    history.navigate("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
