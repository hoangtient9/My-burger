import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";

import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.scss';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import {updateObject, checckValidity} from '../../shared/ultility';

const Auth = props => {
  const [authForm, setAuthForm] = useState(
    {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 8,
          maxLength: 50,
        },
        valid: false,
        touched: false,
      }
    }
  )
  const [isSignup, setIsSignup] = useState(true)
  const [formIsValid, setFormIsValid] = useState(false)
  const {onSetAuthRedirectPath, buildingBurger, authRedirectPath} = props;

  useEffect(() => {
    if(!buildingBurger && authRedirectPath !== '/') {
      onSetAuthRedirectPath()
    }
  }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath])

  const authHandler = (event) => {
    event.preventDefault();

    props.onAuth(authForm.email.value, authForm.password.value, isSignup)
  };

  const formChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(authForm[inputIdentifier], {
      value: event.target.value,
      valid: checckValidity(
        event.target.value,
        authForm[inputIdentifier].validation
        ),
        touched: true
      })
      
      const updatedAuthForm = updateObject(authForm, {
        [inputIdentifier]: updatedFormElement
      });

    let formIsValid = true;
    for (let inputIdentifier in updatedAuthForm) {
      formIsValid = updatedAuthForm[inputIdentifier].valid && formIsValid;
    }

    setFormIsValid(formIsValid)
    setAuthForm(updatedAuthForm)
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup)
  }

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }

  let form = (
    <form onSubmit={authHandler}>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(event) => formChangedHandler(event, formElement.id)}
          inValid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
        />
      ))}
      <Button btnType="Success" disabled={!formIsValid} btnAuth='BtnAuth'>
        {isSignup ? 'SIGN UP' : 'SIGN IN'}
      </Button>
      
    </form>
    
  );

  if (props.loading) {
    form = <Spinner />;
  }
  let message = null;

  if (props.error) {
    message = <p>{props.error.message}</p>
  }
  let authRedirect = null;
  if (props.isAuthenticated) {

    authRedirect = <Redirect to={props.authRedirectPath}/>
  }
  return (
    <div className={classes.Auth}>
      {authRedirect}
      {message}
      {form}
      <Button btnType="Success" clicked={switchAuthModeHandler}>
    {isSignup ? 'Sign In' : 'Sign Up'}
  </Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token != null,
    authRedirectPath: state.auth.authRedirectPath,
    buildingBurger: state.burgerBuilder.building
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
