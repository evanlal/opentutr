import axios from "axios";
import { FETCH_TUTOR, SEARCH_TUTOR } from "./types"

// const fetchTutor = () => {
//   return function(dispatch) {
//     axios
//     .get("/api/tutor-profile")
//     .then(res => dispatch({type: FETCH_TUTOR, payload: res}));
//   }
//
// };

export const fetchTutor = () => async dispatch => {
  console.log("waiting to dispatch fetchTutor action");
  const res = await axios.get("/api/all-tutor-info");
  dispatch({ type: FETCH_TUTOR, payload: res.data });
};

export const searchTutor = () => async dispatch => {
  console.log("waiting to dispatch searchTutors action");
  const res = await axios.get("/api/all-subjects");
  dispatch({ type: SEARCH_TUTOR, payload: res.data });
};