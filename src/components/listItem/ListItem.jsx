import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import "./listItem.scss"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState("")
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })

  useEffect(() => {
    let cancel = false

    const getMovie = async () => {
      try {
        const res = await axiosInstance.get("movies/find/" + item, {
          headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        })
        if (!cancel) {
          setMovie(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getMovie()
    return () => {
      cancel = true
    }
  }, [item])
  const { img, trailer, limit, genre, year, duration, desc } = movie
  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={img} alt="" />
        {isHovered && (
          <>
            <video src={trailer} autoPlay muted loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{duration}min</span>
                <span className="limit">+{limit}</span>
                <span>{year}</span>
              </div>
              <div className="desc">{desc}</div>
              <div className="genre">{genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}
