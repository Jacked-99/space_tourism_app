import { NavLink } from "react-router-dom";
import "./NavLinkButton.scss";
import { useRef, useState } from "react";
const NavLinkButton = ({ link, text }) => {
  const linkRef = useRef(null);
  return (
    <NavLink
      ref={linkRef}
      className={({ isActive, isPending }) =>
        isActive ? "nav-btn-isActive" : ""
      }
      to={link}
    >
      <button
        className={`nav-btn`}
        onClick={() => {
          linkRef.current.click();
        }}
      >
        {text}
      </button>
    </NavLink>
  );
};

export default NavLinkButton;
