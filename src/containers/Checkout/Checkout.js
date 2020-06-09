import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom'

class Checkout extends Component {
  state = {
    ingredients: {
      meat: 1,
      salad: 1,
      bacon: 1,
      cheese: 1
    },
    totalPrice: 4
  }

  componentDidMount() {
    const ingredients = {};
    let price = 0;
    const query = new URLSearchParams(this.props.location.search)
    for (let param of query.entries()){
      if (param[0] === 'price') {
        price = +param[1]
      } else {
        ingredients[param[0]] = +param[1]
      }
    }

    this.setState({ingredients: ingredients, totalPrice: price})
  }

  checkoutCancellHandler = () => {
    this.props.history.goBack()
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render() {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients} 
          checkoutCancel={this.checkoutCancellHandler} 
          checkoutContinue={this.checkoutContinueHandler}/>

        <Route 
          path={this.props.match.path + '/contact-data'} 
          render={(props) => <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>}/>
      </div>

    )
  }
}

export default Checkout;