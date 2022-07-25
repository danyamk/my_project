import React from "react";

import classes from "./LoginButton.module.css";

const LoginButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default LoginButton;
