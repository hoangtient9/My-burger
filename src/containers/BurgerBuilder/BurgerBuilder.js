import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

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
    totalPrice: 4
  }

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + INGREDIENTS__PRICE[type];

    this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
  }

  render() {
    return (
      <Aux>
        <Burger ingrediented={this.state.ingredients}/>
        <BuildControls addIngredients={this.addIngredientsHandler} totalPrice={this.state.totalPrice}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;