import React, { useState } from 'react';

import GoalList from './components/Goals/GoalList/GoalList';
import GoalInput from './components/Goals/GoalInput/GoalInput';
import './App.css';

const App = () => {
  const [Goals, setGoals] = useState([
    { text: '챌린저 일단 시작', id: 'g1' },
    { text: '달성한 목표: 자바스크립트', id: 'g2' }
  ]);

  const addGoalFn = enteredText => {
    setGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemFn = goalId => {
    setGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>등록된 목표가 없습니다. 목표를 등록 하시겠습니까?</p>
  );

  if (Goals.length > 0) {
    content = (
      <GoalList items={Goals} onDeleteItem={deleteItemFn} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <GoalInput onAddGoal={addGoalFn} />
      </section>
      <section id="goals">
        {content}
        {/* {Goals.length > 0 && (
          <GoalList
            items={Goals}
            onDeleteItem={deleteItemFn}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
