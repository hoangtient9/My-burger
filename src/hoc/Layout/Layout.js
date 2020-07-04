import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.scss';
import Tollbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const isAuth = useSelector(state => state.auth.token != null);

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prevState => !prevState)
  }
  
  return  (
    <Aux>
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} isAuth={isAuth}/>
      <Tollbar sideDrawerToggleClicked={sideDrawerToggleHandler} isAuth={isAuth}/>
      <main className={classes.Content}>
          {props.children}
      </main>
    </Aux>
  );
}

export default Layout;