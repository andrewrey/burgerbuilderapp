import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };
  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatePrice = priceAddition + oldPrice;
    this.setState({ totalPrice: updatePrice, ingredients: updatedIngredients });
  };

  removeIngredient = (type) => {
    this.setState((prevState) => {
      if (prevState.ingredients[type] !== 0) {
        return {
          ingredients: { ...prevState.ingredients, [type]: prevState.ingredients[type] - 1 },
          totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
        };
      }
    });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    console.log(disabledInfo);
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} disabledInfo={disabledInfo} price={this.state.totalPrice} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
