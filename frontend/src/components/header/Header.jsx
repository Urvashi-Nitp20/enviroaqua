import React from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { RiAppsLine, RiDashboardLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* <Link to="/dashboard">Dashboard</Link>
        <Link to="/main">Main</Link>
        <Link to="/plots">Plots</Link> */}
      <nav className="nav-container">
        <div className="logo">EA</div>
        <div className="icons-cont">
          <Link to={"/alerts"}>
            <IoMdNotificationsOutline className="icon" />
          </Link>
          <Link to={"/logout"}>
            <HiOutlineLogout className="icon" />
          </Link>
        </div>
      </nav>
      <div className="long-nav">
        <Link to={"/main"}>
          <RiAppsLine className="icon" />
        </Link>
        <Link to={"/dashboard"}>
          <RiDashboardLine className="icon" />
        </Link>
        <Link to={"/plots"}>
          <GoGraph className="icon" />
        </Link>

        <Link to={"/logout"}>
          <HiOutlineLogout className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
