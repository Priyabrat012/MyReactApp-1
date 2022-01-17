//import "./component/Expense.css";
import React, { useState } from "react";

import Expense from "./component/Expenses/Expense";
import NewExpense from "./component/NewExpense/NewExpense";
const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // const para = document.createElement("p");
  // para.textContent = "this is also visible";
  // document.getElementById("root").append(para);

  const [expenses, setExpenses] = useState(dummy_expenses);
  //  console.log(expenses);
  const addExpense = (expense) => {
    // console.log("In app js");
    //console.log(expense);
    setExpenses((prevExpanses) => {
      return [expense, ...prevExpanses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense}></NewExpense>
      <Expense expensesItem={expenses}></Expense>
    </div>
  );
};

export default App;