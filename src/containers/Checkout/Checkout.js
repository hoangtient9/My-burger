import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

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
          ingredients={this.props.ings} 
          checkoutCancel={this.checkoutCancellHandler} 
          checkoutContinue={this.checkoutContinueHandler}/>

        <Route 
          path={this.props.match.path + '/contact-data'} 
          component={ContactData}/>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

export default connect(mapStateToProps)(Checkout);