import React, { useEffect, lazy, Suspense} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.module.scss';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';


const Auth = lazy(() =>  import('./containers/Auth/Auth'))
const Checkout = lazy(() =>  import('./containers/Checkout/Checkout'))
const Orders = lazy(() =>  import('./containers/Orders/Orders'))

const App = props => {
  useEffect(() => {
    props.onAuthCheckState()
  }, [props])

  let routes = 
    <Switch>
      <Route path='/auth' render={() => <Auth />}/>
      <Route path='/' exact component={BurgerBuilder}/>
      <Redirect to='/' />
    </Switch>
  if (props.isAuthenticated) {
    routes = 
      <Switch>
        <Route path='/checkout' render={() => <Checkout />}/>
        <Route path='/orders' render={()=> <Orders />}/>
        <Route path='/auth' render={() => <Auth />}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/' exact component={BurgerBuilder}/>
        <Redirect to='/' />
      </Switch>
  }
  return (
    <div className="App">
      <Layout>
        <Suspense>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token != null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheckState: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
