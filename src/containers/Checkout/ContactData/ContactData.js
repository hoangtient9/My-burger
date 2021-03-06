import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import classes from './ContactData.module.scss';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import * as orderActions from '../../../store/actions/index';
import withErrorhandler from '../../../hoc/withErrorHandler/withErrorHandler';
import {updateObject, checckValidity} from '../../../shared/ultility';

const ContactData = React.memo(props =>  {
  const [orderForm, setOrderForm] = useState(
    {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 200
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'E-mail'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your address'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: 'fastest',
        valid: true,
        validation: {}
      },
    }
  ) 
  const [formIsValid, setFormIsValid] = useState(false)

  const dispatch = useDispatch();
  const onBurgerOrder = useCallback((orderData, token) => dispatch(orderActions.purchaseBurger(orderData, token)), [dispatch]);

  const ings = useSelector(state => state.burgerBuilder.ingredients);
  const price = useSelector(state => state.burgerBuilder.totalPrice); 
  const loading = useSelector(state => state.order.loading);
  const token = useSelector(state =>  state.auth.token);
  const userId = useSelector(state => state.auth.userId); 
  
  const orderHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] = orderForm[formElementIdentifier].value
    }

    const order = {
      ingredients: ings,
      totalPrice: price,
      orderData: formData,
      userId: userId
    };

    onBurgerOrder(order, token);
  }

  const formChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(orderForm[inputIdentifier], {
      value: event.target.value,
      valid : checckValidity(event.target.value, orderForm[inputIdentifier].validation),
      touched: true
    })
    
    const updatedOrderForm = updateObject(orderForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    setOrderForm(updatedOrderForm)
    setFormIsValid(formIsValid)
  }

  const formElementsArray = [];
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key]
    })
  }

  let form = (
    <form onSubmit={orderHandler}>
      {formElementsArray.map(formElement =>   
          <Input 
            key={formElement.id}
            elementType={formElement.config.elementType} 
            elementConfig={formElement.config.elementConfig} 
            value={formElement.config.value} 
            changed={event => formChangedHandler(event, formElement.id)}
            inValid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}/> 
      )}
      <Button btnType='Success' disabled={!formIsValid}>Order</Button>
    </form>
  )

  if (loading) {
    form = <Spinner />
  }
  return (
    <div className={classes.ContactData}>
      <h4>Enter your contact data</h4>
      {form}
    </div>
  )
})

export default withErrorhandler(ContactData, axios);