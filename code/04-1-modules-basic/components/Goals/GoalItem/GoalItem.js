import React from 'react';

import './GoalItem.css';

const GoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteFn = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal_item" onClick={deleteFn}>
      {props.children}
    </li>
  );
};

export default GoalItem;
