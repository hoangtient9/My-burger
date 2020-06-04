import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.scss';
import Tollbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = props => (
  <Aux>
    <SideDrawer />
    <Tollbar />
    <main className={classes.Content}>
        {props.children}
    </main>
  </Aux>
);

export default Layout;