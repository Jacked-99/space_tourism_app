import { NavLink } from "react-router-dom";
import close from "../../assets/shared/icon-close.svg";
import "./MobileNav.scss";

const MobileNav = ({ closeNav, operMobile }) => {
  const isOpened = operMobile;
  const onCloseClick = () => {
    closeNav();
  };

  return (
    <div className={`mobile_navigation ${isOpened ? "opened" : "closed"}`}>
      <button className="close" onClick={onCloseClick}>
        <img src={close}></img>
      </button>
      <ul className="navbar">
        <NavLink to={"/"}>00 Home</NavLink>
        <NavLink to={"/planets/moon"}>01 Destination</NavLink>
        <NavLink to={"/crew/commander"}>02 Crew</NavLink>
        <NavLink>03 Technology</NavLink>
      </ul>
    </div>
  );
};

export default MobileNav;
