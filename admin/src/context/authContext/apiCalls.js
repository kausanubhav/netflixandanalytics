import axios from "axios"
import { loginFailure, loginStart, loginSucess } from "./AuthActions"

export const login = async (user, dispatch) => {
  dispatch(loginStart())
  try {
    const res = await axios.post("api/users/login", user)
    console.log(res)
    res.data.isAdmin && dispatch(loginSucess(res.data))
  } catch (error) {
    dispatch(loginFailure())
  }
}
