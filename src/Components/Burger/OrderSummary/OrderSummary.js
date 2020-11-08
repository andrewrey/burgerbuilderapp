import Aux from "../../../hoc/Aux";

const orderSummary = ({ ingredients, modalClosed }) => {
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
      <button onClick={modalClosed}>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  );
};

export default orderSummary;
