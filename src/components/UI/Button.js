import React from "react";

import classes from "./Button.module.css"

const Button = ({lineStyle = {}, children}) => {
    return (
        <button style={lineStyle} className={classes.button}>{children}</button>
    )
}

export default Button;