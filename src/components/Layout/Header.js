import React from "react";
import { Link } from "react-router-dom";

import SomeImage from "../../assets/Recording-Studio.jpg";
import Button from "../UI/Button";
import LoginButton from "../Login/LoginButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <Button>IGT</Button>
        </Link>
        <div>
          <Link to="/news">
            <Button>News</Button>
          </Link>
          <Link to="/info">
            <Button>Info</Button>
          </Link>
          {props.isAuthenticated && (
            <LoginButton onClick={props.onOpen}>Login</LoginButton>
          )}
          {!props.isAuthenticated && (
            <Button>Hi</Button>
          )}
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={SomeImage} alt="Something aabout music" />
      </div>
    </>
  );
};

export default Header;

//   <li>
//   <Button href="/">Add your post</Button>
// </li>
// <li>
//   <Button onClick={props.onLogout}>Logout</Button>
// </li>
