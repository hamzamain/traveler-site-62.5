import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/news"}>News</Link>
      <Link to={"/destination"}>Destination</Link>
      <Link to={"/blogs"}>Blogs</Link>
      <Link to={"/contects"}>Contect</Link>
    </div>
  );
};

export default Header;
