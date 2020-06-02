import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from  './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      <BurgerIngredient type='meat'/>
      <BurgerIngredient type='meat'/>
      <BurgerIngredient type='meat'/>
      <BurgerIngredient type='meat'/>
      <BurgerIngredient type='meat'/>
      <BurgerIngredient type='cheese'/>
      <BurgerIngredient type='bacon'/>
      <BurgerIngredient type='salad'/>
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default Burger;