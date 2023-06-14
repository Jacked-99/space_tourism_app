import { NavLink } from "react-router-dom";
import "./crewNavbar.scss";
const CrewNavbar = () => {
  return (
    <div className="crew-nav">
      <NavLink
        className={({ isActive }) => (isActive ? "crew-nav-link-active" : "")}
        to={"/crew/commander"}
      ></NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "crew-nav-link-active" : "")}
        to={"/crew/specialist"}
      ></NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "crew-nav-link-active" : "")}
        to={"/crew/pilot"}
      ></NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "crew-nav-link-active" : "")}
        to={"/crew/engineer"}
      ></NavLink>
    </div>
  );
};

export default CrewNavbar;
