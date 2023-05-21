import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.includes("@") }
  }
  if (action.type === 'USER_BLUR') {
    return { value: state.value, isValid: state.value.includes("@") }
  }
  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.trim().length > 6 }
  }
  if (action.type === 'USER_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

  const emailChangeFn = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value })
    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const passwordChangeFn = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const validateEmailFn = () => {
    dispatchEmail({ type: "USER_BLUR" })
  };

  const validatePasswordFn = () => {
    dispatchPassword({ type: "USER_BLUR" });
  };

  const submitFn = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };
  const { isValid: emailIsValid } = emailState;
  /*  const isValid=emailState.isValid;
      const emailIsValid=isValid;
  */
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const id = setTimeout(() => {
      console.log("유효성검증완료");
      //setFormIsValid(emailIsValid && passwordIsValid)
      setFormIsValid(emailState.value && passwordState.value)
    }, 500)
    return () => {
      console.log('끝');
      clearTimeout(id);
    };
  }, [emailState, passwordState])
  return (
    <Card className={classes.login}>
      <form onSubmit={submitFn}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" value={emailState.value} onChange={emailChangeFn} onBlur={validateEmailFn} />
        </div>
        <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" value={passwordState.value} onChange={passwordChangeFn} onBlur={validatePasswordFn} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
