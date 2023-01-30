import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './featured.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({})
  const [isClicked, setIsClicked] = useState(false)
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`api/movies/random?type=movies`, {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
          },
        })
        setContent(res.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    getRandomContent()
  }, [type])
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
            onClick={() => setIsClicked(true)}
          >
            {!isClicked && <option>Genre</option>} <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller</option>
            <option disabled value="fantasy">
              Fantasy
            </option>
            <option disabled value="historical">
              Historical
            </option>
            <option disabled value="horror">
              Horror
            </option>
            <option disabled value="romance">
              Romance
            </option>
            <option disabled value="sci-fi">
              Sci-fi
            </option>
            <option disabled value="thriller">
              Thriller
            </option>
            <option disabled value="western">
              Western
            </option>
            <option disabled value="indian">
              Indian
            </option>
            <option disabled value="animation">
              Animation
            </option>
            <option disabled value="documentary">
              Documentary
            </option>
          </select>
        </div>
      )}
      {/* <div className="imgContainer">
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div> */}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            Info
          </button>
        </div>
      </div>
    </div>
  )
}
