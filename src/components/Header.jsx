import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>NC Messenger</h1>
      </Link>
      <Link to="/user">
        <span role="img" aria-label="menu">
          🍔
        </span>
      </Link>
    </header>
  );
};

export default Header;
