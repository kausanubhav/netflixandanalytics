import "./topbar.css";
import { NotificationsNone,Language,Settings, ArrowDropDownCircleOutlined, LogoutOutlined } from "@mui/icons-material";
import {Tooltip,Fade} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../../context/authContext/AuthActions";
export default function Topbar() {
  const {user,dispatch}=useContext(AuthContext);
  const navigate=useNavigate();
  //handleLogout
  const handleLogout=()=>{
    logout(dispatch);
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">kausadmin</span>
        </div>
        {user&&<div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img
            src="https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="topAvatar"
          />
          <div className="topbarIconContainer">
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Logout"
            >
              <LogoutOutlined onClick={handleLogout}/>
            </Tooltip>
          </div>
        </div>}
      </div>
    </div>
  );
}
