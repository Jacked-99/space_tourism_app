import { NavLink } from "react-router-dom";
import "./NavLinkButton.scss";
import { useRef } from "react";
const NavLinkButton = ({ link, text }) => {
  const linkRef = useRef(null);
  return (
    <button
      className="nav-btn"
      onClick={() => {
        linkRef.current.click();
      }}
    >
      <NavLink ref={linkRef} to={link}>
        {text}
      </NavLink>
    </button>
  );
};

export default NavLinkButton;
