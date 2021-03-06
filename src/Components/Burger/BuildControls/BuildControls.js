import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({ addIngredient, removeIngredient, disabledInfo, price, purchaseable, purchaseHandler }) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl key={ctrl.label} label={ctrl.label} removeIngredient={() => removeIngredient(ctrl.type)} addIngredient={() => addIngredient(ctrl.type)} disabled={disabledInfo[ctrl.type]} price={price} />
      ))}
      <button className={classes.OrderButton} disabled={!purchaseable} onClick={purchaseHandler}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
