import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import ModalContext from "../../store/modal-context";

import SomeImage from "../../assets/Recording-Studio.jpg";
import Button from "../UI/Button";

import buttonClasses from "../UI/Button.module.css";
import classes from "./Header.module.css";

const Header = (props) => {
  const ctx = useContext(AuthContext);
  const modal_ctx = useContext(ModalContext);

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
          <Link to="/login">{!ctx.isLoggedIn && <Button>Login</Button>}</Link>
          {ctx.isLoggedIn && !modal_ctx.activeModal && (
            <div>
              <Link to="/create_post">
                <Button onCheck={props.onCheck}>Create Post</Button>
              </Link>
              <Link to="/">
              <button className={buttonClasses.button} onClick={ctx.onLogout}>
                Logout
              </button>{" "}
              </Link>
            </div>
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
