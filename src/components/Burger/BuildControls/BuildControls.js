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
    <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
    {
      controls
        .map(ctr => 
          <BuildControl 
            key={ctr.label} 
            label={ctr.label} 
            added={() => props.ingredientAdded(ctr.type)}
            removed={() => props.ingredientRemoved(ctr.type)}
            disabled={props.disabled[ctr.type]}/>)
    }
    <button className={classes.OrderButton} disabled={!props.purchasabled} onClick={props.show}>ORDER NOW</button>
  </div>
)

export default BuildControls;