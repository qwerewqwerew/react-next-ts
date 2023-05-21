import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './GoalInput.css';

const Input = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const goalInputChangeFn = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitFn = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitFn}>
      <div className="form_control">
        <label> 목표달성앱</label>
        <input type="text" onChange={goalInputChangeFn} />
      </div>
      <Button type="submit">목표등록</Button>
    </form>
  );
};

export default Input;
