import React, { useContext } from "react";
import { Link } from "react-router-dom";

import SomeImage from "../../assets/Recording-Studio.jpg";
import Button from "../UI/Button";
import classes from "./Header.module.css";

import AuthContext from "../../store/auth-context";

const Header = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <Button onCheck={props.onCheck}>IGT</Button>
        </Link>
        <div>
          <Link to="/news">
            <Button onCheck={props.onCheck}>News</Button>
          </Link>
          <Link to="/info">
            <Button onCheck={props.onCheck}>Info</Button>
          </Link>
          {!ctx.isLoggedIn ? (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          ) : <Button onClick={ctx.onLogout}>Logout</Button>}

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
