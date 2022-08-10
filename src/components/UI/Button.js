import React from "react";

import classes from "./Button.module.css";

const Button = ({ lineStyle = {}, type='button', onClick, children }) => {
  return (
    <button
      style={lineStyle}
      type={type}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};


export default Button;