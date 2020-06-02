import React from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = props => (
  <div className={classes.Controls}>
    <BuildControl />
  </div>
)

export default BuildControls;