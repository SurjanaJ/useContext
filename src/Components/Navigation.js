import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    fontSize: "20px",
    textAlign: "right",
    borderBottom: "1px solid gray",
    padding: 10
  }
});

const Navigation = () => {
  const classes = useStyles();

  return <div className={classes.wrapper}>Welcome, ghostgirl</div>;
};

export default Navigation;
