import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS__PRICE = {
  salad: 0.5,
  bacon: 1,
  cheese: 2,
  meat: 3
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  }

  updatePurchasable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igkey => ingredients[igkey])
      .reduce((sum, el) => sum + el, 0);
    this.setState({purchasable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + INGREDIENTS__PRICE[type];

    this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
    this.updatePurchasable(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - INGREDIENTS__PRICE[type];

    this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
    this.updatePurchasable(updatedIngredients)
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  
  purchaseContinueHandler = () => {
    this.setState({purchasing: false})
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients} 
            purchaseCancelled={this.purchaseCancelHandler} 
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingrediented={this.state.ingredients}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler} 
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          disabled={disableInfo}
          purchasabled={this.state.purchasable}
          show={this.purchaseHandler}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;