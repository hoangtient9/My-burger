import React, { Component } from "react";
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";

import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.scss';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import {updateObject, checckValidity} from '../../shared/ultility';

class Auth extends Component {
  state = {
    authForm: {
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
    },
    formIsValid: false,
    isSignup: true
  };

  componentDidMount() {
    if(!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirectPath()
    }
  }

  authHandler = (event) => {
    event.preventDefault();

    this.props.onAuth(this.state.authForm.email.value, this.state.authForm.password.value, this.state.isSignup)

  };

  formChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.authForm[inputIdentifier], {
      value: event.target.value,
      valid: checckValidity(
        event.target.value,
        this.state.authForm[inputIdentifier].validation
        ),
        touched: true
      })
      
      const updatedAuthForm = updateObject(this.state.authForm, {
        [inputIdentifier]: updatedFormElement
      });

    let formIsValid = true;
    for (let inputIdentifier in updatedAuthForm) {
      formIsValid = updatedAuthForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      authForm: updatedAuthForm,
      formIsValid: formIsValid,
    });
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        isSignup: !prevState.isSignup
      }
    })
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.authForm) {
      formElementsArray.push({
        id: key,
        config: this.state.authForm[key],
      });
    }

    let form = (
      <form onSubmit={this.authHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.formChangedHandler(event, formElement.id)}
            inValid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid} btnAuth='BtnAuth'>
          {this.state.isSignup ? 'SIGN UP' : 'SIGN IN'}
        </Button>
        
      </form>
      
    );

    if (this.props.loading) {
      form = <Spinner />;
    }
    let message = null;

    if (this.props.error) {
      message = <p>{this.props.error.message}</p>
    }
    let authRedirect = null;
    if (this.props.isAuthenticated) {

      authRedirect = <Redirect to={this.props.authRedirectPath}/>
    }
    return (
      <div className={classes.Auth}>
        {authRedirect}
        {message}
        {form}
        <Button btnType="Success" clicked={this.switchAuthModeHandler}>
      {this.state.isSignup ? 'Sign In' : 'Sign Up'}
    </Button>
      </div>
    );
  }
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
