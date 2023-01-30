import axios from "axios"
import { loginFailure, loginStart, loginSucess } from "./AuthActions"

export const login = async (user, dispatch) => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  dispatch(loginStart())
  try {
    const res = await axiosInstance.post("users/login", user)
    console.log(res)
    dispatch(loginSucess(res.data))
  } catch (error) {
    dispatch(loginFailure())
  }
}
