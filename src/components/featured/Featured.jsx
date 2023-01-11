import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
export default function Featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedey</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="indian">Indian</option>
            <option value="animation">Animation</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://images6.alphacoders.com/632/632756.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mad_Max_Fury_Road_logo.png?20211029091433"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          soluta neque nemo eum dolores error id porro fugiat quae, beatae
          consectetur voluptate nobis ex temporibus, sed ipsam autem, est illo?
        </span>
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
  );
}