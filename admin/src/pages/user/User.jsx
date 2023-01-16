import "./user.css";
import {
  PermIdentity,
  CalendarToday,
  MailOutline,
  LocationSearching,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User </h1>
        <Link to="/new-user">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      {/* Show user details */}
      <div className="userContainer">
        <div className="userShow">
          {/* Top part */}
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">John Snow</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          {/* Bottom part */}
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">snowflakejohn</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1899</span>
            </div>{" "}
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+91 99.....</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">john@knowsnothing.com</span>
            </div>{" "}
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Snow street</span>
            </div>
          </div>
        </div>

        {/* Create new user */}
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <div className="userUpdateForm">
            <div className="userUpdateleft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="snowflakejohn"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="John Snow"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="john@knowsnothing.com"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+91....."
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Snow street"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
