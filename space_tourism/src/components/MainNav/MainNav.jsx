import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/shared/logo.svg";
import Hamburger from "../../assets/shared/icon-hamburger.svg";
import "./MainNav.scss";
import MobileNav from "../MoblieNav/MobileNav";

const MainNav = () => {
  const [operMobile, setOpenMobile] = useState(false);
  const closeNav = () => {
    setOpenMobile(false);
  };
  return (
    <div className="navbar-container">
      <NavLink to={"/"}>
        <img src={Logo} alt="space-logo" className="navbar-logo"></img>
      </NavLink>
      <button
        className={`hamburger ${operMobile ? "closed" : ""}`}
        onClick={() => {
          setOpenMobile(true);
        }}
      >
        <img src={Hamburger}></img>
      </button>
      <MobileNav closeNav={closeNav} operMobile={operMobile} />
    </div>
  );
};

export default MainNav;
