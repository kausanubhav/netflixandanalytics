import axios from "axios";
import { loginFailure, loginStart, loginSucess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/users/login", user);
    console.log(res)
   dispatch(loginSucess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
