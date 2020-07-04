import React from 'react';
import classes from './Modal.module.scss';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
  let attachedClasses = [classes.Modal, classes.Close];
  if (props.show) {
    attachedClasses = [classes.Modal, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClose}/>
      <div className={attachedClasses.join(' ')}>
        {props.children}
      </div>
    </Aux>
  )
};

export default React.memo(Modal, (prevProps, nextProps) => {
  return nextProps.show === prevProps.show && nextProps.children === prevProps.children
});
