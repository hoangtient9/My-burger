import React from 'react';
import classes from './BuildControl.module.scss';

const BuildControl = props => (
  <div className={classes.Control}>
    <div className={classes.Label}>{'Cheese'}</div>
    <button className={classes.Less}>{'Less'}</button>
    <button className={classes.More}>{'More'}</button>
  </div>
)

export default BuildControl;
