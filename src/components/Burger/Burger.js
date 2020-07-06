import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from  './BurgerIngredient/BurgerIngredient';

const Burger = React.memo(props => {
  let transformedIngredient = Object.keys(props.ingrediented).map(igKey => {
    return [...Array(props.ingrediented[igKey])].map((i, index) => {
      return <BurgerIngredient key={igKey + index} type={igKey} />
    })
  }).reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>Please adding an ingredient</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {transformedIngredient}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
})

export default Burger;