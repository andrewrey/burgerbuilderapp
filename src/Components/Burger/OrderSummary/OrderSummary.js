import Aux from "../../../hoc/Aux";

const orderSummary = ({ ingredients }) => {
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
    </Aux>
  );
};

export default orderSummary;
