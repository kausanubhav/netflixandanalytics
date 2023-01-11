import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import Inception from "../../video/inception.mp4";
import "./listItem.scss";
import { useState } from "react";
export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.pexels.com/photos/7299450/pexels-photo-7299450.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt=""
      />
      {isHovered && (
        <>
          <video src={Inception} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add  className="icon"/>
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 15 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              optio, impedit reiciendis recusandae ea laudantium est!
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
