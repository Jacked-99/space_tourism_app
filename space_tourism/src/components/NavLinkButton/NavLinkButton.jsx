import { NavLink } from "react-router-dom";
import "./NavLinkButton.scss";
import { useRef, useState } from "react";
const NavLinkButton = ({ link, text }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav-btn nav-btn-isActive" : "nav-btn"
      }
      to={link}
    >
      {text}
    </NavLink>
  );
};

export default NavLinkButton;
