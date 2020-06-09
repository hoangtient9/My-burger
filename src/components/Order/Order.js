import React from 'react';
import classes from './Order.module.scss'

const Order = props => {
    const ingredients = []
    for(let key in props.ingredients) {
        ingredients.push({
            name: key,
            amount: props.ingredients[key]
        })
    }
    const ingredientsOut = ingredients.map(ingredient => (
        <span key={ingredient.name}>{ingredient.name}({ingredient.amount})</span>
    ))

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOut}</p>
            <p>Price: <strong>USD{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default Order;