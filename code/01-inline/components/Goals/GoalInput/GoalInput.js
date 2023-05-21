import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './GoalInput.css';

const Input = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)
  const goalInputChangeFn = event => {
    if (enteredValue.trim().length > 0) { setIsValid(true) }
    setEnteredValue(event.target.value);
  };

  const formSubmitFn = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) { setIsValid(false); return; }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitFn}>
      <div className="form_control">
        <label style={{ color: !isValid ? 'red' : 'black' }}> 목표달성앱</label>
        <input style={{ borderColor: !isValid ? 'red' : 'black', backgroundColor: !isValid ? '#ff000033' : '#00000011' }} type="text" onChange={goalInputChangeFn} />
      </div>
      <Button type="submit">목표등록</Button>
    </form>
  );
};

export default Input;
