import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class orderSummary extends Component {
  // componentDidUpdate() {
  //   console.log("updated");
  // }
  render() {
    let { ingredients, modalClosed, continuePurchase, price } = this.props;
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
        <p>
          <strong>Total Price: {price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={modalClosed} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={continuePurchase} btnType="Success">
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default orderSummary;
