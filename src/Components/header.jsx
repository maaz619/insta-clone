import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (user) => {
  console.log(user);
  return (
    <div className="header__container">
      <img
        className="header__image"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="instagram"
      />
      {user ? (
        <Link className="link" to="/signup">
          <h6>Logout</h6>
        </Link>
      ) : (
        <Link className="link" to="/signup">
          <h6>Login or Signup</h6>
        </Link>
      )}
    </div>
  );
};
export default Header;
