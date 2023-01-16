import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useState,useEffect } from "react";
import axios from "axios";
export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        //query new=true for 10 recent users
        const res = await axios.get("/users?new=true", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzAxNjRhYmNlYjQ5ZjE1ZTliYjI1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzU0NzAxNSwiZXhwIjoxNjczOTc5MDE1fQ.WTtUxdlQRAu7oxCJzUQYNgtWfnl1k1k5dHOBr6PKfto ",
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((newUser) => (
          <li className="widgetSmListItem">
            <img
              src={
                newUser.profilePic ||
                "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{newUser.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
