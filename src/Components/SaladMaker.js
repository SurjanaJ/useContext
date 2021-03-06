import React from "react";
import { createUseStyles } from "react-jss";
import SaladBuilder from "./SaladBuilder";
import SaladSummary from "./SaladSummary";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center"
  }
});

const SaladMaker = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">
          🥗{" "}
        </span>
        Build your Custom Salad!
        <span role="img" aria-label="salad">
          🥗
        </span>
      </h1>
      <SaladBuilder />
      <SaladSummary />
    </>
  );
};

export default SaladMaker;
