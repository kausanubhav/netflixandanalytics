import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Forum,
  Mail,Message,
  ManageAccounts, Assessment, PlayCircleOutline, ListAltOutlined, PersonOutline, SignalCellular0BarOutlined
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              <Link className="link" to='/'>
              Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PersonOutline className="sidebarIcon" />
              <Link to="/users" className="link">
                Users
              </Link>
            </li>
            <li className="sidebarListItem">
              <PlayCircleOutline className="sidebarIcon" />
              <Link to="/movies" className="link">
                Movies
              </Link>
            </li>
            <li className="sidebarListItem">
              <ListAltOutlined className="sidebarIcon" />
              <Link to="/lists" className="link">
              Lists
              </Link>
            </li>
            <li className="sidebarListItem">
              <SignalCellular0BarOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Forum className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <ManageAccounts className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
