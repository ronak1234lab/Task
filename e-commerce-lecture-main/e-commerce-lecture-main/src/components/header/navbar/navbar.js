import React from "react";
import "./navbar.css";
import { NavLink } from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div>
          <NavLink to="/Men" end>
            Men
          </NavLink>
        </div>
        <div>
          <NavLink to="/Women" end>
            Women
          </NavLink>
        </div>
        <div>
          <NavLink to="/kids" end>
            Kids
          </NavLink>
        </div>
        <div>
          <NavLink to="/New-&-featured" end>
            New & featured
          </NavLink>
        </div>
        <div>
          <NavLink to="/Gifts" end>
            Gifts
          </NavLink>
        </div>
      </div>
      <div className="navbar-logo">Logo</div>
      <div className="navbar-user-info">
        <i className="fas fa-search"></i>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
