import { NavLink } from "react-router-dom";
import "./CrewNavbar.scss";
import crew from "../../Utils/CrewCount/Crew";
const CrewNavbar = () => {
  const crewMap = crew.map((crewman) => (
    <NavLink
      key={crew.indexOf(crewman)}
      className={({ isActive }) => (isActive ? "crew-nav-link-active" : "")}
      to={`/crew/${crewman}`}
    ></NavLink>
  ));
  return <div className="crew-nav">{crewMap}</div>;
};

export default CrewNavbar;
