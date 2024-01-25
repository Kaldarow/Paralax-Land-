import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h2 className="logo">
        <span>Hello</span>ween
      </h2>
      <nav className="navigation">
        <NavLink to={"/"}>
          <button>
            Home Cemetry<span></span>
          </button>
        </NavLink>
        <NavLink to={"/users"}>
          <button>
            Homies-Zombies<span></span>
          </button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
