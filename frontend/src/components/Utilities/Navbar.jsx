import React from "react";
import { Link , Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-main nav-image">
      <header className="nav-container">
        <div>
          <h1>Event Manager</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Login</Link>
            </li>
            <li>
              <Link to="/allevents">All Events</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <div>
          <h1>user</h1>
        </div>
      </header>
      <Outlet/>
    </div>
  );
};

export default Navbar;
