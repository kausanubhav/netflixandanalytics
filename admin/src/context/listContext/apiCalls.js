import axios from "axios"
import {
  getListsStart,
  getListsFailure,
  getListsSuccess,
  deleteListFailure,
  deleteListSuccess,
  deleteListStart,
  createListStart,
  createListSuccess,
  createListFailure,
} from "./ListActions"
//Get list
export const getLists = async (dispatch) => {
  dispatch(getListsStart())
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  try {
    const res = await axiosInstance.get("/lists", {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    })
    dispatch(getListsSuccess(res.data))
  } catch (error) {
    dispatch(getListsFailure())
  }
}

//Create list
export const createList = async (list, dispatch) => {
  dispatch(createListStart())
  try {
    const res = await axiosInstance.post("/lists", list, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    })
    dispatch(createListSuccess(res.data))
  } catch (error) {
    dispatch(createListFailure())
  }
}

//Delete list
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart())
  try {
    await axiosInstance.delete("/lists/" + id, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    })
    dispatch(deleteListSuccess(id))
  } catch (error) {
    dispatch(deleteListFailure())
  }
}
