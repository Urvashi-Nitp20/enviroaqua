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
        <div className="logo">EnviroAqua</div>
        <div className="icons-cont">
          <Link to={"/alerts"} className="navlink">
            <IoMdNotificationsOutline className="icon" />
          </Link>
          <Link to={"/logout"} className="navlink">
            <HiOutlineLogout className="icon" />
          </Link>
        </div>
      </nav>
      <div className="long-nav">
        <div className="long-nav-up">
          <Link to={"/main"}>
          <RiAppsLine className="icon" title="App" />
        </Link>
        <Link to={"/dashboard"}>
          <RiDashboardLine className="icon" title="DashBoard" />
        </Link>
        <Link to={"/plots"}>
          <GoGraph className="icon" title="Plots"/>
        </Link>
        </div>
       <div className="long-nav-down">
          <Link to={"/logout"}>
          <HiOutlineLogout className="icon" title="LogOut" />
          </Link>
       </div>
      </div>
    </div>
  );
};

export default Header;
