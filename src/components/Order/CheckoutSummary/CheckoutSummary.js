import React from 'react';
import classes from './CheckoutSummary.module.scss';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'

const CheckoutSummary = props => (
    <div className={classes.CheckoutSummary}>
        <p>Your Burger</p>
        <div style={{width: '300px', margin: 'auto'}}>
            <Burger ingrediented={props.ingredients}/>
        </div>
        <Button btnType='Danger' clicked={props.checkoutCancel}>Cancel</Button>
        <Button btnType='Success' clicked={props.checkoutContinue}>Continue</Button>
    </div>

)

export default CheckoutSummary;