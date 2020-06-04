import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = props => {
  const ingredient = Object.keys(props.ingredients)
    .map(igkey => (
      <li key={igkey}>
        <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
      </li>
    ));
  
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>
        {ingredient}
      </ul>
      <p>Continue to Checkout ?</p>
    </Aux>
  )
}

export default orderSummary;