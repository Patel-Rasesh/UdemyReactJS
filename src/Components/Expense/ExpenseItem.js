// import React, { useState } from 'react';
// import ExpenseDate from "./ExpenseDate";
// import "./ExpenseItem.css";
// import Card from "../Card/Card";

// function ExpenseItem(props) {
//   const [titleName, setTitle] = useState(props.titleName);
//   const clickHandler = () => {
//     setTitle('Updated!');
//   };
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense_item__description">
//         <h2> {titleName} </h2>
//         <div className="expense_item__price"> ${props.amountNumber}</div>
//       </div>
//       <button onClick={clickHandler}>Change Title</button>
//     </Card>
//   );
// }
// export default ExpenseItem;

import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../Card/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.titleName);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amountNumber}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;