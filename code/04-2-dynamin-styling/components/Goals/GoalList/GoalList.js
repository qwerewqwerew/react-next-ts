import React from 'react';

import GoalItem from '../GoalItem/GoalItem';
import styles from './GoalList.module.css';

const GoalList = props => {
  return (
    <ul className={styles.goal_list}>
      {props.items.map(goal => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;
