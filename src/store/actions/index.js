import axios from "axios";
import { FETCH_CANDIDATES, SIGN_UP } from "./actionTypes";

export const fetchCandidates = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/users", {
      headers: {
        token: "X-ADMIN=1",
      },
    });

    dispatch({
      type: FETCH_CANDIDATES,
      payload: res.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const signUp = (userDetails, history) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in userDetails) formData.append(key, userDetails[key]);
    const res = await axios.post("http://localhost:5000/users", userDetails, {
      headers: {
        token: "X-ADMIN=1",
      },
    });
    dispatch({
      type: SIGN_UP,
      payload: res.data,
    });
    alert("User has been registered successfully");
  } catch (error) {
    alert(error);
  }
};
