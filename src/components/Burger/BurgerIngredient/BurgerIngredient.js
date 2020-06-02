import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.key) {
      case 'bread-bottom': 
          ingredient = <div className={classes.BreadBottom}></div>
          break;
      case 'bread-bop': 
      ingredient = <div className={classes.BreadTop}>
                      <div className={classes.Seed1}></div>
                      <div className={classes.Seed2}></div>
                  </div>
      break;
      case 'meat': 
      ingredient = <div className={classes.Meat}></div>
      break;
      case 'cheese': 
      ingredient = <div className={classes.Cheese}></div>
      break;
      case 'salad': 
      ingredient = <div className={classes.Salad}></div>
      break;
      case 'sacon': 
      ingredient = <div className={classes.Bacon}></div>
      break;
      default: ingredient = null;
          break;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  key: PropTypes.string.isRequired
}

export default BurgerIngredient;