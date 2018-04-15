import axios from "axios";
import { FETCH_USER, ADD_EMAIL } from "./types";
import history from '../history/history';

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addEmail = (email) => async dispatch => {
  const res = await axios.post("/api/memberlist", { email });

  history.push('/thankyou');

  dispatch({ type: ADD_EMAIL, payload: res.data });
}
