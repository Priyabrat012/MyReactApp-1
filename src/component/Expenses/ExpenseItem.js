import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by React");

  // const clickHandler = () => {
  //   setTitle(title);
  // };

  return (
    <ul>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button>Change Title</button>
      </Card>
    </ul>
  );
};

export default ExpenseItem;
