import axios from "axios";
import { FETCH_CANDIDATES, SIGN_UP } from "./actionTypes";

export const fetchCandidates = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/users");
    console.log(res.data);

    dispatch({
      type: FETCH_CANDIDATES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (userDetails) => async (dispatch) => {
  try {
    console.log(userDetails);
    const res = await axios.post("http://localhost:5000/users", userDetails);
    console.log(res.data, "sign up action");

    dispatch({
      type: SIGN_UP,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
