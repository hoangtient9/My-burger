import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from  './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  const transformedIngredient = Object.keys(props.ingrediented).map(igKey => {
    return [...Array(props.ingrediented[igKey])].map((i, index) => {
      return <BurgerIngredient key={igKey + index} type={igKey} />
    })
  })
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {transformedIngredient}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default Burger;