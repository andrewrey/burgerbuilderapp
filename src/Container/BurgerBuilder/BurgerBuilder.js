import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 2,
      cheese: 2,
      meat: 2,
    },
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
