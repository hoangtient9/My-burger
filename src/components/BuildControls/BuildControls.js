import React from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
  {label: 'Salad', type: 'salad'},
]
const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price:{props.totalPrice}</p>
    {controls.map(ctr => <BuildControl key={ctr.label} label={ctr.label} added={() => props.addIngredients(ctr.type)}/>)}
  </div>
)

export default BuildControls;