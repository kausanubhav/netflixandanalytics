import axios from "axios"
import { loginFailure, loginStart, loginSucess } from "./AuthActions"

export const login = async (user, dispatch) => {
  dispatch(loginStart())
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  try {
    const res = await axiosInstance.post("users/login", user)
    console.log(res)
    res.data.isAdmin && dispatch(loginSucess(res.data))
  } catch (error) {
    dispatch(loginFailure())
  }
}
