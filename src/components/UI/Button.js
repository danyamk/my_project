import React from "react";

import classes from "./Button.module.css";

const Button = ({ lineStyle = {}, type='button', children }) => {
  return (
    <button
      style={lineStyle}
      type={type}
      className={classes.button}
      disabled={children.disabled}
      onClick={children.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
