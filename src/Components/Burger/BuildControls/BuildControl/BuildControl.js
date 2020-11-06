import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less}>Less</button>
      <button className={classes.More} onClick={props.addIngredient}>
        More
      </button>
    </div>
  );
};

export default BuildControl;