import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  wrapper: {
    border: "1px solid lightgray",
    padding: 25,
    margin: 20,
    textTransform: "capitalize",
    width: 200,
    textAlign: "center",
    position: "relative"
  },
  image: {
    fontSize: 80
  },
  favorite: {
    fontSize: 20,
    position: "absolute",
    top: 10,
    right: 10
  },
  add: {
    background: "none",
    border: "none",
    cursor: "pointer"
  }
});

const SaladItem = ({ name, image }) => {
  const classes = useStyles();
  const favorite = true;
  return (
    <div className={classes.wrapper}>
      <h3>{name}</h3>
      <span
        className={classes.favorite}
        role="img"
        aria-label={favorite ? "Favorite" : "Not-Favorite"}
      >
        {" "}
        {favorite ? "😋" : ""}{" "}
      </span>
      <button className={classes.add}>
        <span className={classes.image} role="img" aria-label={name}>
          {image}{" "}
        </span>
      </button>
    </div>
  );
};

SaladItem.PropTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default SaladItem;
