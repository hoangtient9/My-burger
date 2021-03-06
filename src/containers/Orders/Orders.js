import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = React.memo(props => {

    const dispatch = useDispatch();
    const onFetchOrders = useCallback((token, userId) => dispatch(actions.fetchOrders(token, userId)), [dispatch]);

    const ordersData = useSelector(state => state.order.orders);
    const loading = useSelector(state => state.order.loading);
    const token = useSelector(state => state.auth.token);
    const userId = useSelector(state => state.auth.userId);

    useEffect(() => {
        onFetchOrders(token, userId);
    }, [onFetchOrders, token, userId])

    let orders = <Spinner />;
    if (!loading) {
        orders = ordersData.map(order => <Order ingredients={order.ingredients} price={order.totalPrice} key={order.id} />)
    }
    console.log('Orders rendering')
    return (
        <div>
            {orders}
        </div>  
    )
})

export default withErrorHandler(Orders, axios);