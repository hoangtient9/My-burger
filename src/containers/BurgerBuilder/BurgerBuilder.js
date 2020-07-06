import React, {useEffect, useState, useCallback} from 'react';
import { useDispatch, useSelector} from 'react-redux'

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

const BurgerBuilder = React.memo( props => {
  const [purchasing, setPurchasing] = useState(false)

  const dispatch = useDispatch();

  const onIngredientAdded = useCallback(ingName => dispatch(actions.addIngredient(ingName)), [dispatch]);
  const onIngredientRemoved = useCallback(ingName => dispatch(actions.removeIngredient(ingName)), [dispatch]);
  const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), [dispatch])
  const onPurchased = useCallback(() => dispatch(actions.purchaseInit()), [dispatch]);
  const onSetAuthRedirectPath = useCallback(path => dispatch(actions.setAuthRedirectPath(path)), [dispatch]);

  const ings = useSelector(state => state.burgerBuilder.ingredients);
  const price = useSelector(state => state.burgerBuilder.totalPrice);
  const error = useSelector(state => state.burgerBuilder.error);
  const isAuthenticated = useSelector(state => state.auth.token != null);

  useEffect(() => {
    onInitIngredients()
  }, [onInitIngredients])

  const updatePurchasable = useCallback( ingredients => {
    const sum = Object.keys(ingredients)
      .map(igkey => ingredients[igkey])
      .reduce((sum, el) => sum + el, 0);
    return sum > 0;
  }, [])

  const purchaseHandler = () => {
    if(isAuthenticated) {
      setPurchasing(true)
    } else {
      onSetAuthRedirectPath('/checkout')
      props.history.push('/auth')
    }
  }

  const purchaseCancelHandler = useCallback(() => {
    setPurchasing(false)
  }, [])
  
  const purchaseContinueHandler = () => {
    props.history.push('/checkout')
    onPurchased()
  }

  const disableInfo = {
    ...ings
  };

  for (const key in disableInfo) {
    disableInfo[key] = disableInfo[key] <= 0
  }
  let orderSummary = null;
  let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner />;

  if (ings) {
    burger = (
      <Aux>
        <Burger ingrediented={ings}/>
        <BuildControls 
          ingredientAdded={onIngredientAdded} 
          ingredientRemoved={onIngredientRemoved}
          isAuth={isAuthenticated}
          price={price}
          disabled={disableInfo}
          purchasabled={updatePurchasable(ings)}
          show={purchaseHandler}/>
      </Aux>
    );

    orderSummary = <OrderSummary 
                      ingredients={ings} 
                      purchaseCancelled={purchaseCancelHandler} 
                      purchaseContinued={purchaseContinueHandler}
                      price={price}
                    />;
  }

  console.log('BurgerBuilder rendering')

  return (
    <Aux>
      {
      purchasing ? 
      <Modal show={purchasing} modalClose={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      : null
      }
      {burger}
    </Aux>
  )
})

export default withErrorHandler(BurgerBuilder, axios);