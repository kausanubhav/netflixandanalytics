//In react router v5, it could be done in the app.js itself 
//like {if user show the container} but v6 doesn't allow to add compoenents other than routes and route
// So we need to define the appLayout and use outlet

import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Welcome from "../welcome/Welcome";
import './appLayout.css';
export const AppLayout = ({ user }) =>
  user ? (
    <>
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  ) : (<Welcome/>);
