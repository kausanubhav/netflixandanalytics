import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import { useEffect, useState } from "react"
import axios from "axios"
export default function Home({ type }) {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
          }
        )
        console.log(res)
        setLists(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomLists()
  }, [type, genre])
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List key={list} list={list} />
      ))}
    </div>
  )
}
