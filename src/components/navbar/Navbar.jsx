import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const {dispatch}=useContext(AuthContext);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    //cleanup function
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="logo"
          />
          <Link to="/" className="link">
            <span>Home</span>
          </Link>

          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <Link to="/" className="link">
            <span>Trending</span>
          </Link>
          <Link to="/" className="link">
            <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <Search className="navbarIcon" />
          <span>Kids</span>
          <Notifications className="navbarIcon" />
          <img
            className="navbarImg"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => logout(dispatch)}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
