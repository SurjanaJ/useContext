import React from "react";
import SaladItem from "./SaladItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: [10, 50]
  }
});
const ingredients = [
  {
    image: "🍎",
    name: "apple"
  },
  {
    image: "🥑",
    name: "avocado"
  },
  {
    image: "🥦",
    name: "broccoli"
  },
  {
    image: "🥕",
    name: "carrot"
  },
  {
    image: "🍷",
    name: "red wine dressing"
  },
  {
    image: "🍚",
    name: "seasoned rice"
  }
];

const SaladBulider = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {ingredients.map((ingredient) => (
        <SaladItem
          key={ingredient.name}
          name={ingredient.name}
          image={ingredient.image}
        />
      ))}
    </div>
  );
};

export default SaladBulider;
