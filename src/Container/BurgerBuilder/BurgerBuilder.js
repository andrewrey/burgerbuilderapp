import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

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
    purchaseable: false,
    purchasing: false,
    loading: false,
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandle = () => {
    // alert("You Continue...");
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Andrew",
        address: {
          street: "1234",
          postal: "v5t 2b8",
          country: "Canada",
        },
        email: "andrew@andrew.com",
      },
      deliveryMethod: "express",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  togglePurchaseable = () => {
    this.setState((prevState) => {
      const ingredients = { ...prevState.ingredients };
      const sumArray = Object.keys(ingredients)
        .map((ing) => ingredients[ing])
        .reduce((acc, curr) => acc + curr, 0);
      console.log(sumArray);
      return { purchaseable: sumArray > 0 };
    });
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
    this.togglePurchaseable();
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
    this.togglePurchaseable();
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = <OrderSummary ingredients={this.state.ingredients} modalClosed={this.cancelPurchaseHandler} continuePurchase={this.purchaseContinueHandle} price={this.state.totalPrice} />;

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} disabledInfo={disabledInfo} price={this.state.totalPrice} purchaseable={this.state.purchaseable} purchaseHandler={this.purchaseHandler} />
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder);
