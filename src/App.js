import React, { useEffect, lazy, Suspense, useCallback} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './App.module.scss';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';


const Auth = lazy(() =>  import('./containers/Auth/Auth'))
const Checkout = lazy(() =>  import('./containers/Checkout/Checkout'))
const Orders = lazy(() =>  import('./containers/Orders/Orders'))

const App = props => {

  const dispatch = useDispatch();
  const onAuthCheckState= useCallback(() => dispatch(actions.authCheckState()), [dispatch]);

  const isAuthenticated = useSelector(state => state.auth.token != null);

  useEffect(() => {
    onAuthCheckState()
  }, [onAuthCheckState])

  let routes = 
    <Switch>
      <Route path='/auth' render={props => <Auth {...props}/>}/>
      <Route path='/' exact component={BurgerBuilder}/>
      <Redirect to='/' />
    </Switch>
  if (isAuthenticated) {
    routes = 
      <Switch>
        <Route path='/checkout' render={props => <Checkout {...props}/>}/>
        <Route path='/orders' render={props=> <Orders {...props}/>}/>
        <Route path='/auth' render={props => <Auth {...props}/>}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/' exact component={BurgerBuilder}/>
        <Redirect to='/' />
      </Switch>
  }
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<p>loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

export default withRouter(App);
