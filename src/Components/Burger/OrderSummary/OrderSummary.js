import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = ({ ingredients, modalClosed, continuePurchase }) => {
  const ingredientSummary = Object.keys(ingredients).map((ing) => (
    <li key={ing}>
      <span style={{ textTransform: "capitalize" }}>{ing}</span>: {ingredients[ing]}
    </li>
  ));
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button clicked={modalClosed} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={continuePurchase} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
