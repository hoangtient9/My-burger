import React from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import httpError from '../../hooks/httpError';

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, clearError] = httpError(axios)

    return (
      <Aux>
        {
        error ?
        <Modal show={error} modalClose={clearError}>
          {error ? error.message : null}
        </Modal>
        : null
        }
        
        <WrappedComponent {...props}/>
      </Aux>
    )
  }
}

export default withErrorHandler;