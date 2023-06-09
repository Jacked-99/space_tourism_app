import { NavLink } from "react-router-dom";

const PlanetsNavbar = () => {
  return (
    <div>
      <NavLink to={"/planets/moon"}>MOON</NavLink>
      <NavLink to={"/planets/mars"}>MARS</NavLink>
      <NavLink to={"/planets/europa"}>EUROPA</NavLink>
      <NavLink to={"/planets/titan"}>TITAN</NavLink>
    </div>
  );
};

export default PlanetsNavbar;
