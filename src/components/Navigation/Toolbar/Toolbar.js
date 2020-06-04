import React from 'react';
import classes from './Toolbar.module.scss';

const tollbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div>Logo</div>
        <nav>Order</nav>
    </header>
);

export default tollbar;