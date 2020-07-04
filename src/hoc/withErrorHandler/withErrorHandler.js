import React, {useState, useEffect} from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, setError] =useState(null);

    const reqInterceptor = axios.interceptors.request.use(request => {
      setError(null)
      return request;
    });

    const resInterceptor = axios.interceptors.response.use(response => response, err => setError(err))

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor)
        axios.interceptors.response.eject(resInterceptor)
      }
    }, [resInterceptor, reqInterceptor])
    

    const errorConfirmedHandler = () => {
      setError(null)
    }

    return (
      <Aux>
        <Modal show={error} modalClose={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props}/>
      </Aux>
    )
  }
}

export default withErrorHandler;