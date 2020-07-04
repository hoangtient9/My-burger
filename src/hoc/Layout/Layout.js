import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.scss';
import Tollbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prevState => !prevState)
  }
  
  return  (
    <Aux>
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} isAuth={props.isAuth}/>
      <Tollbar sideDrawerToggleClicked={sideDrawerToggleHandler} isAuth={props.isAuth}/>
      <main className={classes.Content}>
          {props.children}
      </main>
    </Aux>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token != null
  }
}

export default connect(mapStateToProps)(Layout);