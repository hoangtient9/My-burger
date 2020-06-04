import React from 'react';
import classes from './SideDrawer.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = () => (
  <div className={classes.SideDrawer}>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </div>
);

export default SideDrawer;