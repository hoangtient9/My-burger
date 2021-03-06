import React from 'react';
import classes from './Order.module.scss'

const Order = React.memo(props => {
    const ingredients = []
    for(let key in props.ingredients) {
        ingredients.push({
            name: key,
            amount: props.ingredients[key]
        })
    }
    const ingredientsOut = ingredients.map(ingredient => (
        <span 
            key={ingredient.name}
            style={{
                textTransform: "capitalize",
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}>
            {ingredient.name}({ingredient.amount})
        </span>
    ))

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOut}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
})

export default Order;