import React, { Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.module.scss';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';


const asyncAuth = asyncComponent(() =>  import('./containers/Auth/Auth'))
const asyncCheckout = asyncComponent(() =>  import('./containers/Checkout/Checkout'))
const asyncOrders = asyncComponent(() =>  import('./containers/Orders/Orders'))

class App extends Component {
  componentDidMount() {
    this.props.onAuthCheckState()
  }

  render(){
    let routes = 
      <Switch>
        <Route path='/auth' component={asyncAuth}/>
        <Route path='/' exact component={BurgerBuilder}/>
        <Redirect to='/' />
      </Switch>
    if (this.props.isAuthenticated) {
      routes = 
        <Switch>
          <Route path='/checkout' component={asyncCheckout}/>
          <Route path='/orders' component={asyncOrders}/>
          <Route path='/auth' component={asyncAuth}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/' exact component={BurgerBuilder}/>
          <Redirect to='/' />
        </Switch>
    }
    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
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
