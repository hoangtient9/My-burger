import React, { Component } from "react";
import {connect} from 'react-redux';

import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.scss';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';

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

  checckValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  };

  authHandler = (event) => {
    event.preventDefault();

    this.props.onAuth(this.state.authForm.email.value, this.state.authForm.password.value, this.state.isSignup)

  };

  formChangedHandler = (event, inputIdentifier) => {
    const updatedAuthForm = {
      ...this.state.authForm,
    };
    const updatedFormElement = { ...updatedAuthForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checckValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;

    updatedAuthForm[inputIdentifier] = updatedFormElement;

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
    return (
      <div className={classes.Auth}>
        <h4>Enter your acount data</h4>
        {form}
        <Button btnType="Success" clicked={this.switchAuthModeHandler}>
      {this.state.isSignup ? 'Sign In' : 'Sign Up'}
    </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)) 
  }
}

export default connect(null, mapDispatchToProps)(Auth);
