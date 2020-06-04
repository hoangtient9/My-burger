import React from 'react';
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';

const tollbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>Order</nav>
    </header>
);

export default tollbar;