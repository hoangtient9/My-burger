import React, {Component} from 'react';
import {connect} from 'react-redux'

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';


class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  }

  // componentDidMount() {
  //   console.log(this.props)
  //   axios.get('/ingredients.json')
  //     .then(response => this.setState({ingredients: response.data}))
  //     .catch(error => this.setState({error: true}))
  // }

  updatePurchasable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igkey => ingredients[igkey])
      .reduce((sum, el) => sum + el, 0);
    this.setState({purchasable: sum > 0})
  }

  // addIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   }
  //   updatedIngredients[type] = updatedCount;

  //   const oldPrice = this.state.totalPrice;
  //   const updatedPrice = oldPrice + INGREDIENTS__PRICE[type];

  //   this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
  //   this.updatePurchasable(updatedIngredients)
  // }

  // removeIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   }
  //   updatedIngredients[type] = updatedCount;

  //   const oldPrice = this.state.totalPrice;
  //   const updatedPrice = oldPrice - INGREDIENTS__PRICE[type];

  //   this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
  //   this.updatePurchasable(updatedIngredients)
  // }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  
  purchaseContinueHandler = () => {

    const queryParams = [];
    queryParams.push('price=' + this.state.totalPrice)

    for(const i in this.props.ings) {
      queryParams.push(encodeURIComponent(i) + '=' + this.props.ings[i])
    }
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })
  }

  render() {
    const disableInfo = {
      ...this.props.ings
    };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingrediented={this.props.ings}/>
          <BuildControls 
            ingredientAdded={this.props.onIngredientAdded} 
            ingredientRemoved={this.props.onIngredientRemoved}
            price={this.props.price}
            disabled={disableInfo}
            purchasabled={this.state.purchasable}
            show={this.purchaseHandler}/>
        </Aux>
      );

      orderSummary = <OrderSummary 
                        ingredients={this.props.ings} 
                        purchaseCancelled={this.purchaseCancelHandler} 
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.props.price}
                      />;
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));