import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({ addIngredient, removeIngredient, disabledInfo }) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((ctrl) => (
        <BuildControl key={ctrl.label} label={ctrl.label} removeIngredient={() => removeIngredient(ctrl.type)} addIngredient={() => addIngredient(ctrl.type)} disabled={disabledInfo[ctrl.type]} />
      ))}
    </div>
  );
};

export default BuildControls;
