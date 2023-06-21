import { NavLink } from "react-router-dom";
import "./PlanetsNavbar.scss";

const PlanetsNavbar = () => {
  const planets = ["MOON", "MARS", "EUROPA", "TITAN"];
  const planetsMap = planets.map((planet) => (
    <NavLink
      key={planets.indexOf(planet)}
      className={({ isActive, isPending }) =>
        isActive ? "planet-nav-link planet-link-isActive" : "planet-nav-link"
      }
      to={`/planets/${planet.toLowerCase()}`}
    >
      {planet}
    </NavLink>
  ));
  return <div className="planetNavLinks">{planetsMap}</div>;
};

export default PlanetsNavbar;
