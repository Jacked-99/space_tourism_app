import { NavLink } from "react-router-dom";
import "./PlanetsNavbar.scss";

const PlanetsNavbar = () => {
  return (
    <div className="planetNavLinks">
      <NavLink
        className={({ isActive }) => (isActive ? "isActive" : "")}
        to={"/planets/moon"}
      >
        MOON
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "isActive" : "")}
        to={"/planets/mars"}
      >
        MARS
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "isActive" : "")}
        to={"/planets/europa"}
      >
        EUROPA
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "isActive" : "")}
        to={"/planets/titan"}
      >
        TITAN
      </NavLink>
    </div>
  );
};

export default PlanetsNavbar;
