import React from 'react';
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const tollbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.sideDrawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems isAuthenticated={props.isAuth}/>
    </nav>
  </header>
);

export default tollbar;