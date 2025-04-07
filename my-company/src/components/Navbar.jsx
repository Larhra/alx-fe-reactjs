import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{ padding: "20px", backgroundColor: "black", display: "flex", justifyContent: "center" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;